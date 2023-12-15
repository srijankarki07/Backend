const abcd = (req, res, next) => {
  console.log("This is your middleware");
  next();
};
module.exports = { abcd };
