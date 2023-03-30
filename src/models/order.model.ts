import { ResultSetHeader } from 'mysql2';
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

const createOrders = async (userId: number) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.orders (user_id) VALUES (?);
  `, [userId]);
  return insertId;
};

const updateProductsByOrder = async (productsIds: number[], idUser: number) => {
  const orderId = await createOrders(idUser);

  productsIds.map((product) => connection.execute(`
    UPDATE Trybesmith.products
    SET order_id = ?
    WHERE id = ?
  `, [orderId, product]));

  const result = { userId: idUser, productsIds };

  return result;
};

const orderModel = { getAllOrders, createOrders, updateProductsByOrder };

export default orderModel;
