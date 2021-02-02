const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  lastname: {
    type: String
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate : (email) => emailValid(email)
  },
  phone: {
    type: String,
    require: false
  },
  projects: [{
    ref: 'project',
    type: mongoose.Schema.Types.ObjectId
  }],
  tags: [{
    type: String,
    enum: ['VIP', 'Pago tardio', 'Es un Pesado']
  }]
},
{ versionKey : false })

function emailValid(email){
  return /^\S+@\S+\.\S+$/.test(email) 
}

const customerModel = mongoose.model('customers', customerSchema);
module.exports = customerModel;
