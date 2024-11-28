import { Request, Response } from 'express';
import { orderService } from './order.service';

// create order controller
const createOrderController = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderService.createOrderService(order);

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

// get total revenue
const getTotalRevenueController = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getTotalRevenueService();

    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

export const orderController = {
  createOrderController,
  getTotalRevenueController,
};
