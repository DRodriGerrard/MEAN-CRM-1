const mongoose = require('mongoose');

const projectsSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customer',
    require: true
  }
},
{ versionKey : false })

const projectModel = mongoose.model('projects', projectsSchema);
module.exports = projectModel;
