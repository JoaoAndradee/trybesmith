import { IProducts } from '../interfaces';
import productModel from '../models/product.model';

const addProduct = async (product: IProducts): Promise<number> => {
  const insertId = await productModel.addProduct(product);
  return insertId;
};

const getAll = async (): Promise<IProducts[]> => {
  const products = await productModel.getAll();
  return products;
};

const productService = { addProduct, getAll };

export default productService;
