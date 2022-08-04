import { Router } from 'express';
import Controller from '../controllers/orders.controller';

const routes = Router();

const controller = new Controller();

routes.get('/', controller.getOrder);

export default routes;
