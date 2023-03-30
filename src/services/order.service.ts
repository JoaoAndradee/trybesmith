import { Order } from '../interfaces';
import orderModel from '../models/order.model';

const getAllOrders = async ():Promise<Order[]> => {
  const result = await orderModel.getAllOrders();
  return result;
};

const updateProductsByOrder = async (productsIds: number[], id: number) => {
  const result = await orderModel.updateProductsByOrder(productsIds, id);
  return { type: null, message: result };
};

const orderService = { getAllOrders, updateProductsByOrder };

export default orderService;
