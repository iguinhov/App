import express from 'express';
import knex from './database/connection';

import LoginController from './controllers/LoginController';

const routes = express.Router();
const loginController = new LoginController();


// routes.get('/login/:user/:password', loginController.show);

routes.post('/login', loginController.create);

export default routes;



