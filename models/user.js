import mongoose from "mongoose";

const userModel = mongoose.model('User', new mongoose.Schema({
    username: {
        type: String,
        required: true,
        // unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}));

export default userModel;