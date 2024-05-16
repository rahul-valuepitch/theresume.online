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
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Validate individual fields
    if (e.target.name === "fullName") {
      setErrors({
        ...errors,
        fullName: e.target.value ? "" : "Full name is required",
      });
    } else if (e.target.name === "email") {
      setErrors({
        ...errors,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)
          ? ""
          : "Invalid email address",
      });
    } else if (e.target.name === "password") {
      setErrors({
        ...errors,
        password:
          e.target.value.length >= 6
            ? ""
            : "Password must be at least 6 characters",
      });
    } else if (e.target.name === "password2") {
      setErrors({
        ...errors,
        password2:
          e.target.value === formData.password ? "" : "Passwords do not match",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the entire form
    const formValid = Object.values(errors).every((error) => error === "");
    if (formValid) {
      console.log("Form submitted successfully:", formData);
    } else {
      console.log("Form contains errors. Please fix them.");
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
