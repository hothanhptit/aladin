import mongoose from "mongoose";
// const { Schema } = mongoose;

const PostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 60,
    }
}
);

export default mongoose.models.Posts ||
  mongoose.model("Posts", PostSchema);
