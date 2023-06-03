const routes = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

const siteController = require('../controllers/site');
const validation = require('../middleware/validate');

routes.get('/', requiresAuth(), siteController.getSites);
routes.get('/:id', requiresAuth(), siteController.getSingle);
routes.post(
  '/new',
  requiresAuth(),
  validation.saveSite,
  siteController.createSite
);
routes.put(
  '/:id',
  requiresAuth(),
  validation.saveSite,
  siteController.updateSite
);
routes.delete('/:id', requiresAuth(), siteController.deleteSite);

module.exports = routes;
