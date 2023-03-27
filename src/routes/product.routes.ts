import { Router } from 'express';
import productController from '../controllers/product.controller';
import validateProductMiddleware from '../middlewares/productValidation';

const router = Router();

router.post(
  '/',
  validateProductMiddleware.validateNameProduct,
  validateProductMiddleware.validateAmountProduct,
  productController.addProduct,
);

router.get(
  '/',
  productController.getAll,
);

export default router;
