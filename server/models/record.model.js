const mongoose = require('mongoose');

const recordSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required.'],
    minLength: [3, 'Title must be at least three characters.']
  },
  artist: {
    type: String,
    required: [true, 'Artist is required.'],
    minLength: [3, 'Artist must be at least three characters.']
  },
  description: {
    type: String,
    required: [true, 'Description is required.'],
    minLength: [3, 'Description must be at least three characters.']
  },
}, {timestamps: true});

const Record = mongoose.model('Record', recordSchema);
module.exports = Record;