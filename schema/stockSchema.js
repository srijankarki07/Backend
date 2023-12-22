import { object, string, number, date, InferType } from "yup";

let stockSchema = object({
  securityName: string().required(),
  securityId: number().required().positive().integer(),
  symbol: string().required(),
  totalTradedQuantity: number().required(),
  // lastTradedPrice: number(),required().positive()
});
module.exports = { stockSchema };
