const status404Handler = (req, res) => {
  res.status(404).json({ error: 'Not Found' });
};

module.exports = status404Handler;
