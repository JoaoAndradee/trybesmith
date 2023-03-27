import { Router } from 'express';
import userController from '../controllers/user.controller';
import validateUser from '../middlewares/userValidation';

const router = Router();

router.post(
  '/',
  validateUser.validateUsername,
  validateUser.validateVocation,
  validateUser.validateLevel,
  validateUser.validatePassword,
  userController.addUser,
);

export default router;
