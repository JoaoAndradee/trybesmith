import express from 'express';
import routerProduct from './routes/product.routes';
import routerUser from './routes/users.routes';
import routerOrder from './routes/order.routes';
import routerLogin from './routes/login.routes';

const app = express();

app.use(express.json());

app.use('/products', routerProduct);
app.use('/users', routerUser);
app.use('/orders', routerOrder);
app.use('/login', routerLogin);

export default app;
