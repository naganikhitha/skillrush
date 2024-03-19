import mongoose from "mongoose";
import validator from "validator";

 const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must be of at least 3 Characters."],
    maxLength: [30, "First name cannot exceed 30 Characters."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must be of at least 3 Characters."],
    maxLength: [30, "Last name cannot exceed 30 Characters."],
  },
  password: {
    type: String,
    required: true,
    minLength: [3, "password must be of at least 3 Characters."],
    maxLength: [30, "password cannot exceed 30 Characters."],
  },
  username: {
    type: String,
    required: true,
    minLength: [5, "User must be of at least 3 Characters."],
    maxLength: [30, "User cannot exceed 30 Characters."],
  },
  
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
});

export const Admin = mongoose.model("Admin", adminSchema);