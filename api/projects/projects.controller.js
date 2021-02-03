
const projectModel = require('./projects.model');
const customerModel = require('../customers/customers.model');

module.exports = {getAll, getOneById, createOne, putOne, patchOne, removeOne};

function getAll(req, res) {
  return projectModel.find().populate('customer')
    .then(projects =>  res.json(projects))
    .catch(err => res.status(500).json(err))
}

function getOneById(req, res) {
  const projectId = req.params.id ;
  return projectModel.findById(projectId).populate('customer')
    .then(project => res.json(project) )
    .catch(err => res.status(500).json(err) )
}

async function createOne(req, res) {
  await projectModel.create(req.body)
    .then( response => {
      customerModel.findOneAndUpdate({_id: response.customer}, { $push: {projects: response._id}} )
      .then(resp => console.log('bieeen'))
      .catch(err => console.log('maaal'))
      .finally(()=> res.json(response))
    })
    .catch(err => res.json(err))
}

async function putOne(req, res) {
  try {
    const projectId = req.params.id;
    const edited = await projectModel.findOneById(projectId).updateOne(req.body);
    return res.json(edited);
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function patchOne(req, res) {
  try {
    const projectId = req.params.id;
    const edited = await projectModel.findOneById(projectId).updateOne(req.body);
    return res.json(edited);
  } catch (err) {
    return res.status(500).json(err);
  }
}

function removeOne(req, res) {
  const projectId = req.params.id;
  return projectModel.findByIdAndRemove(projectId)
    .then(projects =>  res.json(projects))
    .catch(err => res.json(err))
}
