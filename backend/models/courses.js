import mongoose from "mongoose";
import validator from "validator";

const coursesSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
    minLength: [10, "Course name must be of at least 3 Characters."],
    maxLength: [30, "Course name cannot exceed 30 Characters."],
  },
  cost: {
    type: String,
    required: true,
    minLength: [3, "Cost must be of at least 3 Characters."],
    maxLength: [5, "Cost cannot exceed 30 Characters."],
  },
 duration: {
    type: String,
    required: true,
    minLength: [2, "duration must be of at least 3 Characters."],
    maxLength: [10, "duration cannot exceed 30 Characters."],
  },
  hostedBy: {
    type: String,
    required: true,
    minLength: [5, "hosted by must be of at least 3 Characters."],
    maxLength: [30, "hosted by cannot exceed 30 Characters."],
  },
  courseImageUrl: {
    type: String,
    required: true,
  },
courseDescription: {
    type: String,
    required: true,
    minLength: [20, "CourseDescription must be of at least 20 Characters."],
   
  
},
purchases: {
  type: Array,
}
});

export const Courses = mongoose.model("dbcourses", coursesSchema);