import { useState } from "react";
import { Logo } from "../../static/images/logos";
import AbstractImages from "../../static/images/abstract";
import { Link } from "react-router-dom";
import { FormInput } from "../../components/index";

// Random Number generator
const randomIndex = Math.floor(Math.random() * AbstractImages.length);
const randomImage = AbstractImages[randomIndex]; // Generate random image once

const Register = () => {
  // State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    password2: "",
    apiError: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Valid Form
    let isValid = true;

    // Validate individual fields
    if (!formData.fullName || formData.fullName.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fullName: "Please enter your full name",
      }));
      isValid = false;
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
      isValid = false;
    }
    if (!formData.password || formData.password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters",
      }));
      isValid = false;
    }
    if (!formData.password !== formData.password2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password2: "Password does not match",
      }));
      isValid = false;
    }

    // Validate the entire form
    if (isValid) {
      setErrors({
        fullName: "",
        email: "",
        password: "",
        password2: "",
        apiError: "",
      });

      // Registering User
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/user/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        const result = await response.json();

        if (response.status == 200) {
          console.log(response.status);
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            apiError:
              result.message || "Registration failed. Please try again.",
          }));
        }
      } catch (error) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          apiError: "An error occurred. Please try again later.",
        }));
      }
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        apiError: "Form contains errors. Please fix them.",
      }));
    }
  };

  return (
    <div className="authentication">
      <div className="form">
        <div className="content">
          <Link to="/" className="logo">
            <img src={Logo} alt="The Resumes Online" />
          </Link>
          <form onSubmit={handleSubmit}>
            <h1 className="heading text-dark mt-5 mb-3">Let's Get Started</h1>
            <h6 className="mb-10">
              Carefully read and fill all the inputs with your original
              information
            </h6>

            <FormInput
              label="Full Name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              error={errors.fullName}
            />
            <FormInput
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              error={errors.email}
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              error={errors.password}
            />
            <FormInput
              label="Confirm Password"
              type="password"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
              required
              error={errors.password2}
            />

            <button type="submit" className="button">
              Register
            </button>
          </form>
          <p className="mt-5">
            Already a member? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <div className="image">
        <img src={randomImage} alt="Abstract" />
      </div>
    </div>
  );
};

export default Register;
