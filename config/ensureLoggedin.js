module.exports = function(req, res, next) {
  // Status code 401 means unauthorized
  if (!req.user) return res.status(401).json('Unauthorized')
  next();
};