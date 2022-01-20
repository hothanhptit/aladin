import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      maxlength: 60,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    employeeID: [{ type: Schema.Types.ObjectId, ref: "Employee" }],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
