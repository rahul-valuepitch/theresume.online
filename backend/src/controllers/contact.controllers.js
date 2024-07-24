import Contact from "../models/contact.models.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import {
  emailValidation,
  phoneValidation,
  notEmptyValidation,
} from "../utils/validators.js";

// Add Contact Enquiry Controller
export const ContactEnquiryController = asyncHandler(async (req, res) => {
  try {
    // * Get Details from Frontend
    const { name, email, phone, message } = req.body;

    // * Validate Data
    notEmptyValidation([name, email, phone]);
    emailValidation(email);
    phoneValidation(phone);

    // * Save Data
    const newContact = await Contact.create({ name, email, phone, message });

    // * Verify Data Saving
    const savedContact = await Contact.findById(newContact._id);

    if (!savedContact) {
      throw new Error("Failed to save contact enquiry");
    }

    // * Sending Response
    return res
      .status(200)
      .json(new ApiResponse(200, savedContact, "Enquiry submitted!"));
  } catch (error) {
    return res.status(500).json(new ApiResponse(500, null, error.message));
  }
});
