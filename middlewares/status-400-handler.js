const status400Handler = (err, req, res, next) => {
  if (err.statusCode === 400) {
    res.status(400).json({ message: err.message });
  } else {
    next(err);
  }
};

module.exports = status400Handler;
