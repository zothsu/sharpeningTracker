const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sharpeningSchema = new Schema({
  brand: String,
  medium: {
    enum: ['Diamond', 'Glass', 'Water Stone', 'Oil Stone', 'Natural Stone', 'Other']
  },
  grit: String,
},{
  timestamps: true
})


const knifeSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  steel: {
    type: String,
    enum: ['Stainless Steel', 'Carbon Steel', 'other']
  },
  purchaseDate: Date,
  brand: String,
  imageURL: {
    type: String
  },
  // note: [noteSchema],
  stone: [sharpeningSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Knife', knifeSchema)