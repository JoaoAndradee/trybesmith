import jwt, { SignOptions } from 'jsonwebtoken';
import { TokenPayLoad } from '../interfaces';

const secret = process.env.JWT_SECRET || 'Batatinha';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '300min',
};

const generateToken = (payload:TokenPayLoad) => jwt.sign({ payload }, secret, JWT_CONFIG);

// const verifyToken = (token: string) => jwt.verify(token, secret);

const auth = { generateToken };

export default auth;
