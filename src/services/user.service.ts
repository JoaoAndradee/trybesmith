import { ILogin, IUser } from '../interfaces';
import userModel from '../models/user.model';
import auth from '../auth/authFunctions';

const addUser = async (user: IUser) => {
  await userModel.addUser(user);
};

const login = async (user: ILogin) => {
  const hasUser = await userModel.login(user);

  console.log('USER: ', user);
  console.log('HASUSER: ', hasUser);

  if (hasUser.length === 0) {
    return { type: 'INVALID_FIELDS', message: 'Username or password invalid' };
  }

  const token = auth.generateToken({ id: hasUser[0].id, username: user.password });

  return { type: null, message: token };
};

const userService = { addUser, login };

export default userService;
