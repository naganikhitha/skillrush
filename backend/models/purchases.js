import mongoose from "mongoose";
import validator from "validator";

const purchasesSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
 hostedBy: {
    type: String,
    required: true,
  },
  hostedBy: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Purchases = mongoose.model("purchases", purchasesSchema);