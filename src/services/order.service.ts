import { Order } from '../interfaces';
import orderModel from '../models/order.model';

const getAllOrders = async ():Promise<Order[]> => {
  const result = await orderModel.getAllOrders();
  return result;
};

const orderService = { getAllOrders };

export default orderService;
