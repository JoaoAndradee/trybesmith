import { Request, Response } from 'express';
import productService from '../services/product.service';

const addProduct = async (req: Request, res: Response) => {
  const id = await productService.addProduct(req.body);
  return res.status(201).json({ id, ...req.body });
};

const productController = { addProduct };

export default productController;
