import ErrorHandler from "../middlewares/error.js";
import {Admin} from "../models/admin.js";

export const sendAdmin = async (req, res, next) => {
  const { firstName, lastName, email, password, username, role } = req.body;

  if (!firstName) {
    return next(new ErrorHandler("First name is required!", 400));
  }

  if (!lastName) {
    return next(new ErrorHandler("Last name is required!", 400));
  }

  if (!email) {
    return next(new ErrorHandler("Email is required!", 400));
  }


  if (!password) {
    return next(new ErrorHandler("password is required!", 400));
  }

  if (!username) {
    return next(new ErrorHandler("userName is required!", 400));
  }
  if (!role) {
    return next(new ErrorHandler("role is required!", 400));
  }

  try {
    const admin = await Admin.create({
      firstName,
      lastName,
      email,
      username,
      password,
      role
    });

    res.status(200).json({
      success: true,
      message: "Admin sent successfully",
      admin,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    
    return next(new ErrorHandler("An error occurred while creating the admin"+error, 500));
  
}
};
export const loginAdmin = async (req, res, next) => {
  const { password, username } = req.body;

  if (!username) {
    return next(new ErrorHandler("User name is required!", 400));
  }

  if (!password) {
    return next(new ErrorHandler("Password is required!", 400));
  }

  try {
    const admin = await Admin.findOne({
      username,
      password
    });
    if(admin) {
      res.status(200).json({
        success: true,
        message: "Logged in successfully",
        admin,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "User does not exist",
      });
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    
    return next(new ErrorHandler("An error occurred while creating the admin"+error, 500));
  
}
};

export default sendAdmin;