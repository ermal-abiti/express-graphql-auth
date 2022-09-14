import mongoose from "mongoose";

export const connectToMongo = async () => {
    await mongoose.connect('mongodb://localhost:27017/express-graphql-auth');
    console.log("Connected To MongoDb");
}