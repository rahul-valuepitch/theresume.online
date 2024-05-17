import { useState } from "react";
import { Logo } from "../../static/images/logos";
import AbstractImages from "../../static/images/abstract";
import { Link } from "react-router-dom";
import { FormInput } from "../../components/index";

// Random Number generator
const randomIndex = Math.floor(Math.random() * AbstractImages.length);
const randomImage = AbstractImages[randomIndex];

const ForgotPassword = () => {
  // State
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Validate individual fields
    if (e.target.name === "email") {
      setErrors({
        ...errors,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)
          ? ""
          : "Invalid email address",
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
            <h1 className="heading text-dark mt-5 mb-3">Trouble Logging In?</h1>
            <h6 className="mb-10">
              Enter your email and we'll send you a link to get back to your
              account.
            </h6>

            <FormInput
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              error={errors.email}
            />

            <button type="button" className="button">
              Send Passsword Reset Link
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

export default ForgotPassword;
