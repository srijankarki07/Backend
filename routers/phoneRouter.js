const express = require("express");
const {
  createPhone,
  listPhone,
  upadtePhone,
  getPhone,
  removePhone,
} = require("../controllers/phoneController");
const { validator } = require("../middleware/validator");
const { phoneSchema } = require("../schema/phoneSchema");

const phoneRouter = express.Router();

phoneRouter

  .post("/add", validator(phoneSchema), createPhone)
  .get("/", listPhone)
  .put("/", upadtePhone)
  .get("/:id", getPhone)
  .delete("/:id", removePhone);
module.exports = { phoneRouter };
