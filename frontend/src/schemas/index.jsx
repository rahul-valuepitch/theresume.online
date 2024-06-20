import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// Minimum 6, 1 uppercase, 1 lowercase, 1 numeric digit

// Login Schema Validation
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter Email Address"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please enter a valid password" })
    .required("Please enter Password"),
});

// Register Schema Validation
export const registerSchema = yup.object().shape({
  name: yup.string().required("Please enter Full Name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter Email Address"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please enter a valid password" })
    .required("Please enter Password"),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null, "Password must match"]),
});

// Forgot Password Schema
export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter Email Address"),
});

// Profile Schema Validation
export const profileSchema = yup.object().shape({
  fullName: yup.string().required("Please enter Full Name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter Email Address"),
});

// Profession Detail Schema Validation
export const professionalDetailSchema = yup.object({
  experiences: yup.array().of(
    yup.object({
      title: yup.string().required("Job title is required"),
      employer: yup.string().required("Employer is required"),
      startDate: yup.date().required("Start date is required").nullable(),
      endDate: yup
        .date()
        .nullable()
        .when("currentlyWorking", {
          is: false,
          then: () => yup.date().required("End date is required"),
        }),
      city: yup.string().required("City is required"),
      description: yup.string().required("Description is required"),
      currentlyWorking: yup.boolean(),
    })
  ),
});

// Education Detail Schema Validation
export const educationDetailSchema = yup.object({
  educations: yup.array().of(
    yup.object({
      school: yup.string().required("School Name is required"),
      degree: yup.string().required("Degree is required"),
      startDate: yup.date().required("Start date is required").nullable(),
      endDate: yup
        .date()
        .nullable()
        .when("currentlyWorking", {
          is: false,
          then: () => yup.date().required("End date is required"),
        }),
      city: yup.string().required("City is required"),
      description: yup.string().required("Description is required"),
      currentlyWorking: yup.boolean(),
    })
  ),
});

// Link Detail Schema Validation
export const linkDetailSchema = yup.object({
  links: yup.array().of(
    yup.object({
      label: yup.string().required("Label is required"),
      link: yup.string().required("Link is required"),
    })
  ),
});

// Skill Detail Schema Validation
export const skillDetailSchema = yup.object({
  skills: yup.array().of(
    yup.object({
      name: yup.string().required("Skill Name is required"),
      level: yup.string().required("Level is required"),
    })
  ),
});
