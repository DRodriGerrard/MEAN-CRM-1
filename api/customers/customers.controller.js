
const customerModel = require('./customers.model');

module.exports = {getAll, getOneById, createOne, putOne, patchOne, removeOne};

function getAll(req, res) {
  return customerModel.find().populate('projects')
    .then(customers =>  res.json(customers))
    .catch(err => res.status(500).json(err))
}

function getOneById(req, res) {
  const customerId = req.params.id ;
  return customerModel.findById(customerId).populate('projects')
    .then(customer => res.json(customer) )
    .catch(err => res.status(500).json(err) )
}

function createOne(req, res) {
  return customerModel.create(req.body)
    .then(newCustomer => res.json(newCustomer))
    .catch(err => res.status(500).json(err))
}

async function putOne(req, res) {
  try {
    const customerId = req.params.id;
    const edited = await customerModel.findOneById(customerId).updateOne(req.body);
    return res.json(edited);
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function patchOne(req, res) {
  try {
    const customerId = req.params.id;
    const edited = await customerModel.findOneById(customerId).updateOne(req.body);
    return res.json(edited);
  } catch (err) {
    return res.status(500).json(err);
  }
}

function removeOne(req, res) {
  const customerId = req.params.id;
  return customerModel.findByIdAndRemove()
    .then(customers =>  res.json(customers))
    .catch(err => res.json(err))
}
