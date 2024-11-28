import mongoose, { model, ObjectId, Schema } from 'mongoose';
import { IOrder } from './order.interface';
import { ProductModel } from '../product/product.model';

const orderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: ProductModel,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    require: true,
  },
});

export const OrderModel = model<IOrder>('OrderModel', orderSchema);
