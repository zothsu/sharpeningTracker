const Knife = require('../../models/knife');

module.exports = {
  index,
  create, 
  show,
  createSharpening,
  createNote,
  delete: deleteKnife,
  updateKnife
};

async function updateKnife(req, res) {
  const updateKnife = await Knife.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    {new: true}
  );
  res.json(updateKnife)
}

async function createNote(req, res) {
  const knife = await Knife.findById(req.params.id);
  req.body.user = req.user._id;
  knife.notes.push(req.body);
  await knife.save();
  res.json(knife)
}

async function createSharpening(req, res) {
  const knife = await Knife.findById(req.params.id);
  req.body.user = req.user._id;
  knife.stones.push(req.body);
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

async function deleteKnife(req, res) {
  const knife = await Knife.findByIdAndRemove(req.params.id);
  res.json(knife);
}

// async function deleteSharpening(req, res) {
//   const knife = await Knife.findById(req.params.id);
//   const stone = knife.stones.id(req.params.stoneId).remove();
//   await knife.save();
//   res.json(knife);
// }


