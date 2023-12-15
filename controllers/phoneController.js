const expressAsyncHandler = require("express-async-handler");
const { Phone } = require("../Models/phone");

const createPhone = expressAsyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const phone = new Phone(req.body);
    phone.save().then(() => console.log("phone added"));
    res.send(phone);
  } catch (error) {
    console.log(error);
    res.send({ message: "error creating phone", error });
  }
});
const listPhone = expressAsyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const phone = await Phone.find({});
    res.send(phone);
  } catch (error) {
    console.log(error);
    res.send({ message: "error listing phone", error });
  }
});
const removePhone = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Phone.findByIdAndDelete(id);

    res.send(result);
  } catch (error) {
    console.log(error);
    res.send({ message: "error deleting phone", error });
  }
});

const getPhone = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Phone.findById(id);

    res.send(result);
  } catch (error) {
    console.log(error);
    res.send({ message: "error finding phone", error });
  }
});

const upadtePhone = expressAsyncHandler(async (req, res) => {
  try {
    const { _id, ...rest } = req.body;
    const id = req.params.id;
    const result = await Phone.findByIdAndUpdate(_id, rest);

    res.send(result);
  } catch (error) {
    console.log(error);
    res.send({ message: "error updating phone", error });
  }
});

module.exports = {
  createPhone,
  listPhone,
  removePhone,
  getPhone,
  upadtePhone,
};
