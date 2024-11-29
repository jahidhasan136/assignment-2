import { OrderModel } from './order.model';
import { IOrder } from './order.interface';

// create order services
const createOrderService = async (order: IOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

// calculate total order revenue services
const getTotalRevenueService = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);
  return result;
};

//

export const orderService = {
  createOrderService,
  getTotalRevenueService,
};
