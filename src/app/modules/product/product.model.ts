import { model, Schema } from 'mongoose';
import { IProduct } from './product.interface';

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxlength: [10, 'Name can not be more than 10 characters'],
  },
  brand: {
    type: String,
    required: [true, 'Brand is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    validate: {
      validator: (value: number) => value > 0,
      message: `{VALUE}, price must be greater than 0`,
    },
  },
  category: {
    type: String,
    enum: [
      'Writing',
      'Office',
      'Supplies',
      'Art Supplies',
      'Educational',
      'Technology',
    ],
    required: [true, 'Category not matched the providing requirements'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [10, 'Description can not be less than 10 character'],
    maxlength: [50, 'Description can not be more than 50 character'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    validate: {
      validator: (value: number) => value > 0,
      message: `{VALUE}, quantity must be greater than 0`,
    },
  },
  inStock: {
    type: Boolean,
    required: true,
    default: true,
  },
});

export const ProductModel = model<IProduct>('ProductModel', productSchema);
