const mongoose = require("mongoose");
const { Schema } = mongoose;

const phoneSchema = new Schema(
  {
    model: String, // String is shorthand for {type: String}
    Name: String,
    RAM: Number,
    storage: Number,
    battery: Number,
    price: Number,
    color: String,
    year: Number,
  },
  { timestamps: true }
);
const Phone = mongoose.model("phone", phoneSchema);
module.exports = { Phone };
