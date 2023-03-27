import { Request, Response } from 'express';
import productService from '../services/product.service';

const addProduct = async (req: Request, res: Response) => {
  const id = await productService.addProduct(req.body);
  return res.status(201).json({ id, ...req.body });
};

const getAll = async (req: Request, res: Response) => {
  const result = await productService.getAll();
  return res.status(200).json(result);
};

const productController = { addProduct, getAll };

export default productController;
