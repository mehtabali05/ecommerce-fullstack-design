import jwt from 'jsonwebtoken';

const generateToken = (user) => {
    const expiresIn = process.env.JWT_EXPIRES_IN || "7d";
    const token = jwt.sign(
        {id: user._id, role: user.role},
        process.env.JWT_SECRET, 
        {expiresIn});
    return token;
}

export default generateToken;