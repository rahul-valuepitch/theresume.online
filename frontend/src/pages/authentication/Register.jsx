import { Logo } from "../../static/images/logos";
import AbstractImages from "../../static/images/abstract";
import { Link } from "react-router-dom";

const Register = () => {
  // Random Number generator
  const randomIndex = Math.floor(Math.random() * AbstractImages.length);
  const randomImage = AbstractImages[randomIndex];

  return (
    <div className="authentication">
      <div className="form">
        <div className="content">
          <Link to="/" className="logo">
            <img src={Logo} alt="The Resumes Online" />
          </Link>
          <form>
            <h1 className="heading text-dark mt-5 mb-3">Let's Get Started</h1>
            <h6 className="mb-10">
              Carefully read and fill all the inputs with your original
              information
            </h6>
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password2">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="password2"
                name="password2"
                required
              />
            </div>
            <button type="button" className="button">
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
