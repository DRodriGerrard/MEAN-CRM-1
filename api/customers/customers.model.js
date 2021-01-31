const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  name: 'String'
})

const customerModel = mongoose.model('customers', customerSchema);
module.exports = customerModel;