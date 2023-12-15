const express = require("express");
const {
  createCat,
  listCat,
  upadteCat,
  getCat,
  removeCat,
} = require("../controllers/catController");
const catRouter = express.Router();

catRouter

  .post("/", createCat)
  .get("/", listCat)
  .put("/", upadteCat)
  .get("/:id", getCat)
  .delete("/:id", removeCat);
module.exports = { catRouter };
