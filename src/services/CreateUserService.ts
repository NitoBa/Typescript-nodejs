import IUser from "../models/UserInterface";
import UserModel from "../models/UserModel";
import UserRespository from "../repositories/UserRepository";

interface IResquest {
    username: string,
    email: string,
    password: string,
}


class CreateUserService {

    public async createNewUser({ username, email, password }: IResquest): Promise<IUser | object> {

        const checkUserExists = await UserRespository.findUserbyName(username)


        if (checkUserExists != null) {
            return { "message": "user already exists" }
        }

        const user = await UserRespository.createNewUser(
            username, email, password
        )

        return user;
    }
}

export default new CreateUserService()