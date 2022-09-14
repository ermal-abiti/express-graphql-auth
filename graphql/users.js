import userModel from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Get All Users
export const users = async () => {
    return await userModel.find();
};

export const createUser = async (args) => {
    if (await userModel.findOne({ username: args.input.username })) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(args.input.password, 12);

    const user = new userModel({
        username: args.input.username,
        password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
        expiresIn: '2h',
    });

    return { username: user.username, token };
};

export const login = async (args) => {
    const user = await userModel.findOne({ username: args.input.username });

    if (!user) {
        throw new Error('Check credentials');
    }

    const verifyPassword = await bcrypt.compare(args.input.password, user.password);

    if (!verifyPassword) {
        throw new Error('Check credentials');
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '2h' });

    return { username: user.username, token };
}