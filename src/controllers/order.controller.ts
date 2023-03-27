import { Request, Response } from 'express';
import orderModel from '../models/order.model';

const getAllOrders = async (req: Request, res: Response) => {
  const result = await orderModel.getAllOrders();
  return res.status(200).json(result);
};

const orderController = { getAllOrders };

export default orderController;
