import IUser from "../models/UserInterface";
import UserRespository from "../repositories/UserRepository";
import HashProvider from "../providers/HashProvider";

interface IResquest {
    username: string,
    email: string,
    password: string,
}


class CreateUserService {



    public async createNewUser({ username, email, password }: IResquest): Promise<{}> {

        const checkUserExists = await UserRespository.findUserbyName(username)


        if (checkUserExists != null) {
            return { "message": "user already exists" }
        }

        const hashedPassword = await HashProvider.generateHash(password);

        await UserRespository.createNewUser(
            username, email, hashedPassword
        )

        return { 'message': "User created" };
    }
}

export default new CreateUserService()