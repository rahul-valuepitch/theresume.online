import { useState } from "react";
import { Link } from "react-router-dom";

import { Logo } from "../../static/images/logos";
import AbstractImages from "../../static/images/abstract";
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
    apiError: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valid Form
    let isValid = true;

    // Validate individual fields
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

    // Validate the entire form
    if (isValid) {
      setErrors({
        email: "",
        password: "",
        apiError: "",
      });

      // Loging User In
      try {
        const response = fetch(
          `${import.meta.env.VITE_API_BASE_URL}/user/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        const result = response.json();

        if (response.status == 200) {
          console.log(response.status);
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            apiError: result.message || "Login failed. Please try again.",
          }));
        }
      } catch (error) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          apiError: "An error occurred. Please try again later.",
        }));
      }
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
            {errors.apiError && (
              <span className="block text-sm text-red-500 mb-4">
                {errors.apiError}
              </span>
            )}
            <button type="submit" className="button">
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
