import { Request, Response } from 'express';
import userService from '../services/user.service';
import auth from '../auth/authFunctions';

const addUser = async (req: Request, res: Response) => {
  const { username } = req.body;
  await userService.addUser(req.body);
  const token = auth.generateToken(username);
  res.status(201).json({ token });
};

const login = async (req: Request, res: Response) => {
  const { type, message } = await userService.login(req.body);

  if (type) return res.status(401).json({ message });

  return res.status(200).json({ token: message });
};

const userController = { addUser, login };

export default userController;
