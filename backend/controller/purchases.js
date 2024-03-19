import ErrorHandler from "../middlewares/error.js";
import { Purchases } from "../models/purchases.js";
 

export const purchaseCourse = async (req, res, next) => {
  const { courseId, username, hostedBy, date } = req.body;

  if (!username) {
    return next(new ErrorHandler("User name is required!", 400));
  }

  if (!hostedBy) {
    return next(new ErrorHandler("Author is required!", 400));
  }

  if (!courseId) {
    return next(new ErrorHandler("Course ID is required!", 400));
  }
  try {
    const purchasedCourse = await Purchases.create({
      username,
      hostedBy,
      courseId,
      date,
    });

    res.status(200).json({
      success: true,
      message: "Course purchased successfully",
      purchasedCourse,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    
    return next(new ErrorHandler("An error occurred while creating the courses"+error, 500));
  
}
};

export const getDashboard = async (req, res, next) => {
  let username = req.query.username;
  let dateSelected = req.query.date;
  try {
    const dashboard = await Purchases.find({
      hostedBy: username,
    });

    res.status(200).json({
      success: true,
      message: "Course purchased successfully",
      dashboard,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    
    return next(new ErrorHandler("An error occurred while fetching the dashboard"+error, 500));
  
}
};

export default purchaseCourse;