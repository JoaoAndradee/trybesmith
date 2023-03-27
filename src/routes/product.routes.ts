import { Router } from 'express';
import productController from '../controllers/product.controller';

const router = Router();

router.post(
  '/',
  productController.addProduct,
);

router.get(
  '/',
  productController.getAll,
);

export default router;
