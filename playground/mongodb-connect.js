const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/MyServiceSchedule', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');
  // const db = client.db('MyServiceSchedule');
  //
  // db.collection('vehicle').insertOne({
  //   make: 'Ford',
  //   model: 'Focus',
  //   odometer: 262000,
  //   vin: '1FAF'
  // }, (err, result) => {
  //   if (err) {
  //     return comsole.log('Unable to insert vehicle', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
  // client.close();
})