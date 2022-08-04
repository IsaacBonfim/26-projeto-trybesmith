import { Router } from 'express';
import Controller from '../controllers/users.controller';

const routes = Router();

const uController = new Controller();

routes.post('/', uController.create);

export default routes;
