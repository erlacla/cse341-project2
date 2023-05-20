const routes = require('express').Router();

const siteController = require('../controllers/site');

routes.get('/', siteController.getSites);
routes.get('/:id', siteController.getSingle);
routes.post('/new', siteController.createSite);

module.exports = routes;
