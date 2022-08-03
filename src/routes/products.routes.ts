import { Router } from 'express';
import PController from '../controllers/products.controller';

const routes = Router();

const pController = new PController();

routes.post('/', pController.create);
routes.get('/', pController.getAll);

export default routes;
