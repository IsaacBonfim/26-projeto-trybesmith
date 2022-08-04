import { Router } from 'express';
import Controller from '../controllers/login.controller';

const routes = Router();

const lController = new Controller();

routes.post('/', lController.login);

export default routes;
