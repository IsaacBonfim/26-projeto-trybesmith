import express from 'express';
import 'express-async-errors';
import pRoutes from './routes/products.routes';
import uRoutes from './routes/users.routes';
import oRoutes from './routes/orders.routes';
import errors from './middleware/error.middleware';

const app = express();

app.use(express.json());

app.use('/products', pRoutes);
app.use('/users', uRoutes);
app.use('/orders', oRoutes);

app.use(errors);

export default app;
