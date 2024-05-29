import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Logo } from "../static/images/logos";
import { logout } from "../store/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/user/logout`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="inner">
          <Link to="/" className="logo">
            <img src={Logo} alt="TheResumes.online" />
          </Link>
          <ul>
            <li className="nav-item">
              <Link to="/resume" className="nav-link">
                Resumes
              </Link>
            </li>
            {!isAuthenticated ? (
              <>
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
              </>
            ) : (
              <>
                <li>
                  <Link to="/profile" className="button-alt">
                    Profile
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="button">
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
