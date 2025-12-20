import User from "../models/User.js";
import generateToken from "../utils/jwt.js";

export const register = async (req, res) => {
  try {
    const { name, email, password} = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email and password required" });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password, role });

    res.status(201).json({
      success: true,
      message: "Registered successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: "user"
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user);
    res.cookie('token', token, {
      httpOnly: true, // Prevents client-side JS (XSS) from reading the token
      secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
      sameSite: 'strict', // Protects against CSRF
      maxAge: 7 * 24 * 60 * 60 * 1000 // e.g., 7 days lifetime
    });

    res.json({
      success: true,
      message: "Login successfully",
      user : {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false,
      error: error.message,
      message: "Server error"
    });
  }
};

export const adminAuthCheck = (req, res) => {
  // If this function executes, it means the JWT was valid and the role was 'admin'
  res.status(200).json({ 
      ok: true, 
      message: "Admin authorized",
      // You can optionally send the user data back for context (req.user is set by protect middleware)
      user: {
          _id: req.user._id,
          name: req.user.name,
          role: req.user.role 
      }
  });
};

export const logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ 
      success: true, 
      message: "Logged out" 
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    })
  }
};


