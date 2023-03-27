import { IProducts } from '../interfaces';
import productModel from '../models/product.model';

const addProduct = async (product: IProducts): Promise<number> => {
  const insertId = await productModel.addProduct(product);
  return insertId;
};

const productService = { addProduct };

export default productService;
