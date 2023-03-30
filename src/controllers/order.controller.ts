import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response } from 'express';
import orderModel from '../models/order.model';
import orderService from '../services/order.service';

const getAllOrders = async (req: Request, res: Response) => {
  const result = await orderModel.getAllOrders();
  return res.status(200).json(result);
};

const createOrders = async (req: Request, res: Response) => {
  const { authorization: token } = req.headers;
  const { productsIds } = req.body;

  if (token) {
    try {
      const { payload: { id } } = jwt.decode(token) as JwtPayload;
      const { message } = await orderService.updateProductsByOrder(productsIds, id);
      return res.status(201).json(message);
    } catch (err) {
      return res.status(500).json({ message: 'Token not found' });
    }
  }
};

const orderController = { getAllOrders, createOrders };

export default orderController;
