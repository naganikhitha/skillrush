import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, time, date } = req.body;

  if (!firstName) {
    return next(new ErrorHandler("First name is required!", 400));
  }

  if (!lastName) {
    return next(new ErrorHandler("Last name is required!", 400));
  }

  if (!email) {
    return next(new ErrorHandler("Email is required!", 400));
  }

  if (!phone) {
    return next(new ErrorHandler("Phone is required!", 400));
  }

  if (!time) {
    return next(new ErrorHandler("Time is required!", 400));
  }

  if (!date) {
    return next(new ErrorHandler("Date is required!", 400));
  }

  try {
    const reservation = await Reservation.create({
      firstName,
      lastName,
      email,
      date,
      time,
      phone  
    });

    res.status(200).json({
      success: true,
      message: "Reservation sent successfully",
      reservation,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    
    return next(new ErrorHandler("An error occurred while creating the reservation"+error, 500));
  
}
};

export default sendReservation;