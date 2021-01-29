const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: ['localhost:4200']
}));
app.use(express.json());

app.get('/', (req, res) => {
  return res.send('Hiiiii')
})

app.listen(5000, (err) => {
  if(err) return console.log('Have an error! ', err);
  console.log('Server running in port 5000'); 
})