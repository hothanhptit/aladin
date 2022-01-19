import mongoose from "mongoose";

const EmployeesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 60,
    },
    username: {
      type: String,
      required: true,
      maxlength: 60,
    },
    img: {
      type: String,
      required: true,
    },
    joined: {
      type: Date,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    dob: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Employees ||
  mongoose.model("Employees", EmployeesSchema);
