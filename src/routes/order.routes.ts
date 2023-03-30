import { Router } from 'express';
import orderController from '../controllers/order.controller';
import validateOrderMiddleware from '../middlewares/orderValidations';

const router = Router();

router.get(
  '/',
  orderController.getAllOrders,
);

router.post(
  '/',
  validateOrderMiddleware.validateToken,
  validateOrderMiddleware.validateFieldsOrder,
  orderController.createOrders,
);

export default router;
