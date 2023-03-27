import { Request, Response } from 'express';
import userService from '../services/user.service';
import auth from '../auth/authFunctions';

const addUser = async (req: Request, res: Response) => {
  const { username } = req.body;
  await userService.addUser(req.body);
  const token = auth.generateToken(username);
  res.status(201).json({ token });
};

const userController = { addUser };

export default userController;
