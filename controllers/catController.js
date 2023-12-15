const expressAsyncHandler = require("express-async-handler");
const { Cat } = require("../Models/cats");

const createCat = expressAsyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const cat = new Cat(req.body);
    cat.save().then(() => console.log("cat added"));
    res.send(cat);
  } catch (error) {
    console.log(error);
    res.send({ message: "error creating cat", error });
  }
});
const listCat = expressAsyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const cat = await Cat.find({});
    res.send(cat);
  } catch (error) {
    console.log(error);
    res.send({ message: "error listing cat", error });
  }
});
const removeCat = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Cat.findByIdAndDelete(id);

    res.send(result);
  } catch (error) {
    console.log(error);
    res.send({ message: "error deleting cat", error });
  }
});

const getCat = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Cat.findById(id);

    res.send(result);
  } catch (error) {
    console.log(error);
    res.send({ message: "error finding cat", error });
  }
});

const upadteCat = expressAsyncHandler(async (req, res) => {
  try {
    const { _id, ...rest } = req.body;
    const id = req.params.id;
    const result = await Cat.findByIdAndUpdate(_id, rest);

    res.send(result);
  } catch (error) {
    console.log(error);
    res.send({ message: "error updating cat", error });
  }
});

module.exports = {
  createCat,
  listCat,
  removeCat,
  getCat,
  upadteCat,
};
