import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    const expiresIn = process.env.JWT_EXPIRES_IN || "7d";
    const token = jwt.sign({id},process.env.JWT_SECRET, {expiresIn});
    return token;
}

export default generateToken;