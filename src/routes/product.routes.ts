import { Router } from 'express';
import productController from '../controllers/product.controller';

const router = Router();

router.post(
  '/',
  productController.addProduct,
);

export default router;
