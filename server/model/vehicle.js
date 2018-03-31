var mongoose = require('mongoose');

var Vehicle = mongoose.model('Vehicle', {
  make: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  model: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  vin: {
    type: String,
    length: 17,
    trim: true
  },
  odometer: {
    type: Number,
    default: null
  },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = {Vehicle};