import express, { Application } from 'express';
import cors from 'cors';
import { productRoutes } from './modules/product/product.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.use('/api/v1/products', productRoutes);

// app.post('/', productController.createProduct);

export default app;
