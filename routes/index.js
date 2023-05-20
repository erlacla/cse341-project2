// router.get('/user', (req, res) => {
//   res
//     .status(200)
//     .json(
//       (response = { reversed: req.query.name.split('').reverse().join('') })
//     );
// });

const routes = require('express').Router();

routes.use('/', require('./swagger'));
routes.use('/user', require('./user'));
routes.use('/sites', require('./sites'));

module.exports = routes;
