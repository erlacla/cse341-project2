const routes = require('express').Router();

routes.use('/', require('./swagger'));
routes.use('/user', require('./user'));
routes.use('/sites', require('./sites'));

module.exports = routes;
