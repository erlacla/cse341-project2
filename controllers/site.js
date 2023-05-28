const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getSites = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('sites').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingle = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid site id to find a site.');
    }
    const siteId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection('sites')
      .find({ _id: siteId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const createSite = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateSite = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid site id to update a site.');
    }
    const siteId = new ObjectId(req.params.id);
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
      .replaceOne({ _id: siteId }, site);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(response.error || 'An error occurred when updating the site.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteSite = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid site id to delete a site.');
    }
    const siteId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection('sites')
      .deleteOne({ _id: siteId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(response.error || 'An error occurred when deleting the site.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getSites, getSingle, createSite, updateSite, deleteSite };
