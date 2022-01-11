import mongoose from "mongoose";

const EmployeesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 60,
    },
    img: {
      type: String,
      required: true,
    },
    joined: {

    },
    phonenumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Employees ||
  mongoose.model("Employees", EmployeesSchema);
