import { Schema, model, Document } from "mongoose";
import IUser from "../models/UserInterface";

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
})

export default model<IUser>('User', userSchema);