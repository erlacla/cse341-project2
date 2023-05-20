const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getSites = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('sites').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('sites')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createSite = async (req, res) => {
  const site = {
    name: req.body.name,
    location: req.body.location,
    website: req.body.website,
    price: req.body.price,
    pool: req.body.pool,
    sqFoot: req.body.sqFoot,
    bedrooms: req.body.bedrooms,
    distance: req.body.distance,
    notes: req.body.notes,
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('sites')
    .insertOne(site);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || 'An error occurred when creating the site.');
  }
};

module.exports = { getSites, getSingle, createSite };
