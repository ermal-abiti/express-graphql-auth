import jwt from 'jsonwebtoken';
import userModel from '../models/user.js';

const isAuth = async (req, res, next) => {
    if (!req.headers.authorization) {
        req.isAuth = false;
        return next();
    }

    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded) {
            req.isAuth = true;
            req.user = await userModel.findOne(
                { username: decoded.username },
                { project: { password: 0 } }
            );
            return next();
        }
        req.isAuth = false;
        return next();
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid Token',
        });
    }
};

export default isAuth;
