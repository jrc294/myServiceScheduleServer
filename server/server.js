const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Vehicle} = require('./model/vehicle');
const {User} = require('./model/user');

const {ObjectID} = require('mongodb');
//
// let vehicle = new Vehicle({
//   make: 'Ford',
//   model: 'Focus',
//   odometer: 262000,
//   _user: new ObjectID()
// });
//
// vehicle.save().then((doc) => {
//   console.log('Vehicle saved', doc);
// }, (e) => {
//   console.log('Unable to save vehicle', e);
// });

var app = express();

// Middleware. Takes my JSON and converts into an object and attaches it to the request object.
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Started on port 3000');
});

app.post('/vehicle', (req, res) => {
    let vehicle = new Vehicle({
      make: req.body.make,
      model: req.body.model,
      _user: new ObjectID()
    });
    vehicle.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
});

// app.get('/', (req, res) => {
//   res.send('Hello Express!');
// });