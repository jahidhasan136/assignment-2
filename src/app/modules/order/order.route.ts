import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

router.post('/', orderController.createOrderController);

router.get('/revenue', orderController.getTotalRevenueController);

export const orderRoutes = router;
