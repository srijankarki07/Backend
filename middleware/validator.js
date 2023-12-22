const validator = (schema) => async (req, res, next) => {
  try {
    await schema?.validate(req.body);
    next();
  } catch (err) {
    console.log(err);
    res.send({ message: err.errors.join(" "), success: false });
  }
};
module.exports = { validator };
