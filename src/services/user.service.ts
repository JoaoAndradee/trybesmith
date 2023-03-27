import { IUser } from '../interfaces';
import userModel from '../models/user.model';

const addUser = async (user: IUser) => {
  await userModel.addUser(user);
};

const userService = { addUser };

export default userService;
