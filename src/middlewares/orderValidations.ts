import { NextFunction, Request, Response } from 'express';
import auth from '../auth/authFunctions';

const validateFieldsOrder = async (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;

  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }

  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }

  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }

  next();
};

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const verify = auth.verifyToken(token as string);
    if (verify) next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

const validateOrderMiddleware = { validateFieldsOrder, validateToken };

export default validateOrderMiddleware;
