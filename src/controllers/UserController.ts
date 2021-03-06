import { Request, Response } from "express";
import UserModel from "../models/UserModel";
import CreateUserService from "../services/CreateUserService";



class UserController {


    public async index(req: Request, res: Response): Promise<Response> {

        const users = await UserModel.find().select('-password')
        return res.json(users);
    }

    public async create(req: Request, res: Response): Promise<Response> {

        const { username, email, password } = req.body;

        const user = await CreateUserService.createNewUser({
            username,
            email,
            password
        });


        return res.status(201).json(user);
    }
}

export default new UserController()