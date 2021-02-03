require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect(`${process.env.MONGODB_host}://${process.env.MONGODB_user}:${process.env.MONGODB_password}@${process.env.MONGODB_cluster}`, 
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.use( cors({ origin: ['localhost:4200'] }) );
app.use( express.json() );

const customersRouter = require('./api/customers/customers.router');
app.use('/customers', customersRouter);

const projectsRouter = require('./api/projects/projects.router');
app.use('/projects', projectsRouter);

app.listen(5000, (err) => {
  if(err) return console.log('Have an error! ', err);
  console.log('Server running in port 5000'); 
})