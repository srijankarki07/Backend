const requestTimer = (req, res, next) => {
  console.log(Date.now());
  next();
};
module.exports = { requestTimer };
