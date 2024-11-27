import { Request, Response } from 'express';
import { productServices } from './product.service';

// create products controller
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productServices.createProduct(product);

    res.status(200).json({
      success: true,
      message: 'Product created successfully',
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

// get all products controller

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProducts();

    res.status(200).json({
      success: true,
      message: 'Products retrieved successfully',
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

// get a specific controller
const getSpecificProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSpecificProduct(productId);

    res.status(200).json({
      success: true,
      message: 'Products retrieved successfully',
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

// update specific controller product
const updateSpecificProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const result = await productServices.updateSpecificProduct(
      productId,
      updateData,
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
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

// delete specific controller product
const deleteSpecificProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteSpecificProduct(productId);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
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

export const productController = {
  createProduct,
  getAllProducts,
  getSpecificProduct,
  updateSpecificProduct,
  deleteSpecificProduct,
};
