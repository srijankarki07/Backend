const mongoose = require("mongoose");
const { Schema } = mongoose;

const phoneSchema = new Schema(
  {
    Name: String,
    model: String, // String is shorthand for {type: String}
    RAM: Number,
    storage: Number,
    battery: Number,
    price: Number,
    color: String,
    year: String,
  },
  { timestamps: true }
);
const Phone = mongoose.model("phone", phoneSchema);
module.exports = { Phone };
