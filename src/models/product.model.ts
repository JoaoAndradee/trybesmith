import { ResultSetHeader } from 'mysql2';
import { IProducts } from '../interfaces';
import connection from './connection';

const addProduct = async (product: IProducts): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)
  `, [product.name, product.amount]);
  return insertId;
};

const productModel = { addProduct };

export default productModel;
