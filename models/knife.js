const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sharpeningSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  brand: String,
  medium: {
    type: String, 
    enum: ['Diamond', 'Glass', 'Water Stone', 'Oil Stone', 'Natural Stone', 'Other']
  },
  otherMedium: String, 
  grit: String,
  date: Date,
},{
  timestamps: true
})

const noteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  noteType: {
    type: String,
    enum: ['Damage Report', 'Bevel Angle', 'Other']
  },
  noteDetails: {
    type: String
  }
}, {
  timestamps: true
})

const knifeSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true},
  length: String, 
  steel: {
    type: String,
    enum: ['Stainless Steel', 'Carbon Steel', 'Powdered Metal','Other']
  },
  otherSteel: String,
  purchaseDate: Date,
  brand: String,
  imageURL: {
    type: String
  },
  notes: [noteSchema],
  stones: [sharpeningSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Knife', knifeSchema)