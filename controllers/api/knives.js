const Knife = require('../../models/knife');

module.exports = {
  index,
  create, 
  show,
  createSharpening,
};

async function createSharpening(req, res) {
  const knife = await Knife.findById(req.params.id);
  req.body.user = req.user._id;
  knife.stone.push(req.body);
  await knife.save();
  res.json(knife)
}

async function show(req, res) {
  const knife = await Knife.findById(req.params.id);
  res.json(knife);
}

async function index(req, res) {
  const knives = await Knife.find({user: req.user._id})
  res.json(knives) 
}

async function create(req, res) {
  req.body.user = req.user._id;
  const knife = new Knife(req.body)
  try {
    await knife.save();
    res.json(knife)
  }catch(e) {
    console.log(e.message)
  }
}

