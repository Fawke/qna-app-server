const status500Handler = (err, req, res, next) => {
  if (err.statusCode === 500) {
    res.status(500).json({ message: err.message });
  } else {
    next(err);
  }
};

module.exports = status500Handler;
