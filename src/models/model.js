import mongoose, { Schema } from "mongoose";

const modelSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Data = mongoose.models.Data || mongoose.model("Data", modelSchema);

export default Data;
