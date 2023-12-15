const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    studentName: String,
    studentCollegeName: String,
    studentRn: Number,
    studentAddress: String,
    studentAge: Number,
    phoneNumber: Number,
  },
  { timestamps: true }
);
const Student = mongoose.model("Student", studentSchema);
module.exports = { Student };
