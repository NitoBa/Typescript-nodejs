import IUserRepository from "./UserRepositoryInterface";
import IUser from "../models/UserInterface";
import UserModel from "../models/UserModel";

class UserRespository implements IUserRepository {
    async createNewUser(username: string, email: string, password: string): Promise<void> {


        await UserModel.create(
            {
                username,
                email,
                password
            },

        );

    }
    async findUserbyName(username: string): Promise<IUser | null> {

        const user = await UserModel.findOne({ username }).select('-password')

        return user
    }

}

export default new UserRespository()