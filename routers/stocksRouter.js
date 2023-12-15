const express = require("express");
const {
  createStocks,
  listStocks,
  upadteStock,
  getStocks,
  removeStock,
} = require("../controllers/stocksController");
const { abcd } = require("../middleware/sampleMiddleware");
const { requestTimer } = require("../middleware/requestTimer");
const { enoughPrice } = require("../middleware/enoughPrice");
const stocksRouter = express.Router();
stocksRouter
  .post("/", enoughPrice, createStocks)
  .get("/", requestTimer, listStocks)
  .put("/", upadteStock)
  .get("/:id", getStocks)
  .delete("/:id", removeStock);
module.exports = { stocksRouter };
