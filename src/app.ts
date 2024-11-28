import express, { Application } from 'express';
import cors from 'cors';
import { productRoutes } from './modules/product/product.route';
import { orderRoutes } from './modules/order/order.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// app.post('/', productController.createProduct);

export default app;
