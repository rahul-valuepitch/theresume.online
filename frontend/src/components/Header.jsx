import { Link } from "react-router-dom";
import { Logo } from "../static/images/logos";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="inner">
          <Link to="/" className="logo">
            <img src={Logo} alt="TheResumes.online" />
          </Link>
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Resumes
              </Link>
            </li>
            <li>
              <Link to="/login" className="button-alt">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="button">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
