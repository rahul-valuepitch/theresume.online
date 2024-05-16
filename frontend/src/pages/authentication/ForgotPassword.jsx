import { Logo } from "../../static/images/logos";
import AbstractImages from "../../static/images/abstract";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
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
            <h1 className="heading text-dark mt-5 mb-3">Trouble Logging In?</h1>
            <h6 className="mb-10">
              Enter your email and we'll send you a link to get back to your
              account.
            </h6>
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
            <button type="button" className="button">
              Send Passsword Reset Link
            </button>
          </form>
        </div>
      </div>
      <div className="image">
        <img src={randomImage} alt="Abstract" />
      </div>
    </div>
  );
};

export default ForgotPassword;
