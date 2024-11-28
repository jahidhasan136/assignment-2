import mongoose, { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';
import { ProductModel } from '../product/product.model';

const orderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: (value) => {
        const emailRegex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(value);
      },
      message: '{VALUE}, is not a valid email address',
    },
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
