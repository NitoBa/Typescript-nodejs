import IUser from "../models/UserInterface";



interface IUserRepository {
    createNewUser(username: string, email: string, password: string): Promise<IUser>
    findUserbyName(username: string): Promise<IUser | null>
}

export default IUserRepository