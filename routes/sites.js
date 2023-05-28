const routes = require('express').Router();

const siteController = require('../controllers/site');
const validation = require('../middleware/validate');

routes.get('/', siteController.getSites);
routes.get('/:id', siteController.getSingle);
routes.post('/new', validation.saveSite, siteController.createSite);
routes.put('/:id', validation.saveSite, siteController.updateSite);
routes.delete('/:id', siteController.deleteSite);

module.exports = routes;
