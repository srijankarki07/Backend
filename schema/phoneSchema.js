import { object, string, number, date, InferType } from "yup";

let phoneSchema = object({
  model: string().required(),
  Name: number().required().positive().integer(),
  RAM: string().required(),
  storage: number().required(),
  battery: number(), required().positive(),
  price:number(), required().positive(),
  color: string().required(),
    year: number(), required().positive()
});
module.exports = { phoneSchema };