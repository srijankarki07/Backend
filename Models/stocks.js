const mongoose = require("mongoose");
const { Schema } = mongoose;

const stockSchema = new Schema(
  {
    securityId: {
      type: String,
      unique: true,
    },
    securityName: {
      type: String,
      unique: true,
    },
    symbol: {
      type: String,
      unique: true,
    },
    indexId: Number,
    totalTradeQuantity: { type: Number, default: 0 },
    lastTradedPrice: { type: Number, require: true },
    percentageChange: Number,
    lastUpdatedDateTime: Date,
    previousClose: Number,
  },
  { timestamps: true }
);
const Stock = mongoose.model("Stock", stockSchema);
module.exports = { Stock };
