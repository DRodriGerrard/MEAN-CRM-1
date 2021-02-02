const express = require('express');
const cors = require('cors');
const app = express();
const customersRouter = require('./api/customers/customers.router');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
require('dotenv').config();

mongoose.connect(`${process.env.MONGODB_host}://${process.env.MONGODB_user}:${process.env.MONGODB_password}@${process.env.MONGODB_cluster}`, { useNewUrlParser: true, useUnifiedTopology:  true });

app.use( cors({ origin: ['localhost:4200'] }) );
app.use( express.json() );

app.use('/customers', customersRouter);

app.listen(5000, (err) => {
  if(err) return console.log('Have an error! ', err);
  console.log('Server running in port 5000'); 
})