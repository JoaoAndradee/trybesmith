import { RowDataPacket } from 'mysql2';
import { ILogin, IUser } from '../interfaces';
import userModel from '../models/user.model';
import auth from '../auth/authFunctions';

const addUser = async (user: IUser) => {
  await userModel.addUser(user);
};

const login = async (user: ILogin) => {
  const hasUser = await userModel.login(user);

  if (hasUser.length === 0) {
    return { type: 'INVALID_FIELDS', message: 'Username or password invalid' };
  }

  const token = auth.generateToken({ id: hasUser[0].id, username: user.password });

  return { type: null, message: token };
};

const findUser = async (id: number) => {
  const result = await userModel.findUser(id) as RowDataPacket;
  if (result.length <= 0) return { type: 'INVALID_USER', message: 'User do not exist' };
  return { type: null, message: result };
};

const userService = { addUser, login, findUser };

export default userService;
