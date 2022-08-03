import express from 'express';
import 'express-async-errors';
import pRoutes from './routes/routes';
import errors from './middleware/error.middleware';

const app = express();

app.use(express.json());

app.use('/products', pRoutes);

app.use(errors);

export default app;
