const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getUsers = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('user').find();
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
    .collection('user')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createUser = async (req, res) => {
  const contact = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('user')
    .insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || 'An error occurred when creating the user.');
  }
};

module.exports = { getUsers, getSingle, createUser };
