
const customerModel = require('./customers.model');

module.exports = {getAll, getOneById, createOne, putOne, patchOne, removeOne};

function getAll(req, res) {
  return customerModel.find()
    .then(customers => {
      return res.json(customers);
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

function getOneById(req, res) {
  return customerModel.find()
    .then(customers => {
      return res.json(customers);
    })
    .catch(err => {
      return res.json(err);
    })
}

function createOne(req, res) {
  return customerModel.find()
    .then(customers => {
      return res.json(customers);
    })
    .catch(err => {
      return res.json(err);
    })
}

function putOne(req, res) {
  return customerModel.find()
    .then(customers => {
      return res.json(customers);
    })
    .catch(err => {
      return res.json(err);
    })
}

function patchOne(req, res) {
  return customerModel.find()
    .then(customers => {
      return res.json(customers);
    })
    .catch(err => {
      return res.json(err);
    })
}

function removeOne(req, res) {
  return customerModel.find()
    .then(customers => {
      return res.json(customers);
    })
    .catch(err => {
      return res.json(err);
    })
}
