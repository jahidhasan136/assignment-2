import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

router.post('/create-order', orderController.createOrderController);

router.get('/revenue', orderController.getTotalRevenueController);

export const orderRoutes = router;
