// import { NextFunction, Request, Response } from 'express';
// import auth from '../auth/authFunctions';
// import { TokenPayLoad } from '../interfaces';
// import userModel from '../models/user.model';

// const validateToken = async (req: Request, res: Response, next: NextFunction) => {
//   const { authorization: token } = req.headers;

//   if (!token) {
//     return res.status(401).json({ message: 'Token not found' });
//   }

//   try {
//     const decoded = auth.verifyToken(token);

//     const hasUsername = await userModel.findUser(decoded);
//   }
// };
