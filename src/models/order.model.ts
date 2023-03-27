import { Order } from '../interfaces';
import connection from './connection';

const getAllOrders = async (): Promise<Order[]> => {
  const [result] = await connection.execute(`
    SELECT
      o.id,
      o.user_id as userId,
      json_arrayagg(p.id) as productsIds
    FROM
      Trybesmith.orders AS o
    JOIN
      Trybesmith.products as p
      ON o.id = p.order_id
      GROUP BY o.id
  `);
  return result as Order[];
};

const orderModel = { getAllOrders };

export default orderModel;
