import express from 'express';
import routerProduct from './routes/product.routes';

const app = express();

app.use(express.json());

app.use('/products', routerProduct);

export default app;
