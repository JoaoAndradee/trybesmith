import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProducts } from '../interfaces';
import connection from './connection';

const addProduct = async (product: IProducts): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)
  `, [product.name, product.amount]);
  return insertId;
};

const getAll = async (): Promise<IProducts[]> => {
  const [rows] = await connection.execute<IProducts[] & RowDataPacket[]>(`
    SELECT * FROM Trybesmith.products;
  `);
  return rows;
};

const productModel = { addProduct, getAll };

export default productModel;
