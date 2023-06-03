const routes = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

const userController = require('../controllers/user');
const validation = require('../middleware/validate');

routes.get('/', requiresAuth(), userController.getUsers);
routes.get('/:id', requiresAuth(), userController.getSingle);
routes.post(
  '/new',
  requiresAuth(),
  validation.saveUser,
  userController.createUser
);
routes.put(
  '/:id',
  requiresAuth(),
  validation.saveUser,
  userController.updateUser
);
routes.delete('/:id', requiresAuth(), userController.deleteUser);

module.exports = routes;
