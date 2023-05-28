const validator = require('../helpers/validate');

const saveUser = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    email: 'required|email',
    password: 'required|string',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err,
      });
    } else {
      next();
    }
  });
};

const saveSite = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    location: 'required|string',
    website: 'required|string',
    price: 'required|string',
    pool: 'required|boolean',
    sqFoot: 'required|integer',
    bedrooms: 'required|integer',
    distance: 'required|string',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err,
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveUser,
  saveSite,
};
