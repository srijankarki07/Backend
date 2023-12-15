const enoughPrice = (req, res, next) => {
  if (req.body.lastTradedPrice < 1000) {
    console.log("Price is below 1000.");
    res.send("Not Possible");
  } else {
    console.log(Date.now());
  }
  next();
};
module.exports = { enoughPrice };
