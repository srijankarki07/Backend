const express = require("express");
const {
  createPhone,
  listPhone,
  upadtePhone,
  getPhone,
  removePhone,
} = require("../controllers/phoneController");
const phoneRouter = express.Router();

phoneRouter

  .post("/", createPhone)
  .get("/", listPhone)
  .put("/", upadtePhone)
  .get("/:id", getPhone)
  .delete("/:id", removePhone);
module.exports = { phoneRouter };
