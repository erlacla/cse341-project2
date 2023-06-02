const express = require('express');
const routes = require('express').Router();
const app = express();
const { auth } = require('express-openid-connect');
require('dotenv').config();

routes.use('/', require('./swagger'));
routes.use('/user', require('./user'));
routes.use('/sites', require('./sites'));

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUER,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

module.exports = routes;
