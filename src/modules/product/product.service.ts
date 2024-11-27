import { IProduct } from './product.interface';
import { ProductModel } from './product.model';

// create products services
const createProduct = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

// get all products services
const getAllProducts = async () => {
  const result = await ProductModel.find();
  return result;
};

// get a specific product services
const getSpecificProduct = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

// update specific product services
const updateSpecificProduct = async (_id: string, updateData: object) => {
  console.log({ _id });
  const result = await ProductModel.updateOne({ _id }, { $set: updateData });
  return result;
};

export const productServices = {
  createProduct,
  getAllProducts,
  getSpecificProduct,
  updateSpecificProduct,
};
