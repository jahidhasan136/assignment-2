import { IProduct } from './product.interface';
import { ProductModel } from './product.model';

// create products services
const createProductService = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

// get all products services
const getAllProductService = async () => {
  const result = await ProductModel.find();
  return result;
};

// get a specific product services
const getSpecificProductService = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

// update specific product services
const updateSpecificProductService = async (
  _id: string,
  updateData: object,
) => {
  const result = await ProductModel.updateOne({ _id }, { $set: updateData });
  return result;
};

// delete specific product services
const deleteSpecificProductService = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  return result;
};

export const productServices = {
  createProductService,
  getAllProductService,
  getSpecificProductService,
  updateSpecificProductService,
  deleteSpecificProductService,
};
