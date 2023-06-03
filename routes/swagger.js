const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const { requiresAuth } = require('express-openid-connect');

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', requiresAuth(), swaggerUi.setup(swaggerDocument));

module.exports = routes;
