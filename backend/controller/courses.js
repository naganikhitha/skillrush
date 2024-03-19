import ErrorHandler from "../middlewares/error.js";
import { Courses } from "../models/courses.js";
import Select from 'react-select';
export const getCourses = async (req, res, next) => {
  try {
    const courses = await Courses.find();

    res.status(200).json({
      success: true,
      message: "Courses sent successfully",
      courses,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    
    return next(new ErrorHandler("An error occurred while fetching the courses"+error, 500));
  
}
};

export const sendCourses = async (req, res, next) => {
  const { courseName, cost, duration, hostedBy, courseImageUrl, courseDescription } = req.body;

  if (!courseName) {
    return next(new ErrorHandler("cousre name is required!", 400));
  }

  if (!cost) {
    return next(new ErrorHandler("cost is required!", 400));
  }

  if (!duration) {
    return next(new ErrorHandler("duration is required!", 400));
  }

  if (!hostedBy) {
    return next(new ErrorHandler("hosted by is required!", 400));
  }

  if (!courseImageUrl) {
    return next(new ErrorHandler("courseImageUrl is required!", 400));
  }
  if (!courseDescription) {
    return next(new ErrorHandler("courseDescription is required!", 400));
  }



  try {
    const courses = await Courses.create({
      courseName,
      cost,
      duration,
      hostedBy,
      courseDescription,
      courseImageUrl
    });

    res.status(200).json({
      success: true,
      message: "Courses sent successfully",
      courses,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    
    return next(new ErrorHandler("An error occurred while creating the courses"+error, 500));
  
}
};

export const getSingleCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await Courses.findById(id);

    res.status(200).json({
      success: true,
      message: "Course sent successfully",
      course,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    
    return next(new ErrorHandler("An error occurred while fetching the course"+error, 500));
  
}
};


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
    
    let course = await Courses.findById(courseId);
    if(!course.purchases) {
      course.purchases = [];
    }
    course.purchases = [...course.purchase, ]
    course = await Courses.findByIdAndUpdate(courseId, {
      purchases: course.purchase
    });

    res.status(200).json({
      success: true,
      message: "Courses sent successfully",
      courses,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    
    return next(new ErrorHandler("An error occurred while creating the courses"+error, 500));
  
}
};

export default sendCourses;