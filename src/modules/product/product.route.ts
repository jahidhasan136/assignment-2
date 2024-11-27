import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

// add products
router.post('/create-product', productController.createProduct);

//get all products
router.get('/', productController.getAllProducts);

// get a specific product
router.get('/:productId', productController.getSpecificProduct);

// update specific product
router.put('/:productId', productController.updateSpecificProduct);

export const productRoutes = router;
