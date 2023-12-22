const { object, string, number, date } = require("yup");

let phoneSchema = object({
  name: string().required("Please Enter the Name of your Phone"),
  model: string().required("Please Enter the Model Number"),
  RAM: number().required("Enter RAM").positive("Negative"),
  storage: number()
    .required("Storage is required")
    .positive("Can't be negative"),
  battery: number()
    .positive("Can't be negative")
    .required("This field can't be empty"),
  price: number()
    .required("Enter the price of phone")
    .positive("Price is never negative"),
  color: string().required("Enter color of your phone"),
  year: date().required("Enter your phone make year"),
});
module.exports = { phoneSchema };
