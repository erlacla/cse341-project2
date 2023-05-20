const routes = require('express').Router();

const userController = require('../controllers/user');

routes.get('/', userController.getUsers);
routes.get('/:id', userController.getSingle);
routes.post('/new', userController.createUser);

module.exports = routes;
