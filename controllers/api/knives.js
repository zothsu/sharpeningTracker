const Knife = require('../../models/knife');

module.exports = {
  index 
};

async function index(req, res) {
  const knives = await Knife.find({user: req.user._id})
  res.json(knives) 
}