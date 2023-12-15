const expressAsyncHandler = require("express-async-handler");
const { Stock } = require("../Models/stocks");

const createStocks = expressAsyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const stock = new Stock(req.body);
    await stock.save();
    res.send(stock);
  } catch (error) {
    console.log(error);
    res.send({ message: "error creating stocks", error });
  }
});
const listStocks = expressAsyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const stock = await Stock.find({});
    res.send(stock);
  } catch (error) {
    console.log(error);
    res.send({ message: "error listing stocks", error });
  }
});
const removeStock = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Stock.findByIdAndDelete(id);

    res.send(result);
  } catch (error) {
    console.log(error);
    res.send({ message: "error deleting stocks", error });
  }
});

const getStocks = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Stock.findById(id);

    res.send(result);
  } catch (error) {
    console.log(error);
    res.send({ message: "error finding stocks", error });
  }
});

const upadteStock = expressAsyncHandler(async (req, res) => {
  try {
    const { _id, ...rest } = req.body;
    const id = req.params.id;
    const result = await Stock.findByIdAndUpdate(_id, rest);

    res.send(result);
  } catch (error) {
    console.log(error);
    res.send({ message: "error updating stocks", error });
  }
});

module.exports = {
  createStocks,
  listStocks,
  removeStock,
  getStocks,
  upadteStock,
};
