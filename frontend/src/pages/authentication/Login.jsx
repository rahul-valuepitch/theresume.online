import { useState } from "react";
import { Logo } from "../../static/images/logos";
import AbstractImages from "../../static/images/abstract";
import { Link } from "react-router-dom";
import { FormInput } from "../../components/index";

// Random Number generator
const randomIndex = Math.floor(Math.random() * AbstractImages.length);
const randomImage = AbstractImages[randomIndex];

const Login = () => {
  // State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
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
    } else if (e.target.name === "password") {
      setErrors({
        ...errors,
        password:
          e.target.value.length >= 6
            ? ""
            : "Password must be at least 6 characters",
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
            <h1 className="heading text-dark mt-5 mb-3">Welcome Back</h1>
            <h6 className="mb-10">
              Carefully read and fill all the inputs with your original
              information
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
            <FormInput
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              error={errors.password}
            />
            <p className="text-end">
              <Link className="text-sm" to="/forgot-password">
                Forgot Password?
              </Link>
            </p>
            <button type="button" className="button">
              Login
            </button>
          </form>
          <p className="mt-5">
            Not a member? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
      <div className="image">
        <img src={randomImage} alt="Abstract" />
      </div>
    </div>
  );
};

export default Login;
