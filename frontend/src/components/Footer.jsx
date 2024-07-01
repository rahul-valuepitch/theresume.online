import { Link } from "react-router-dom";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { LogoAlt } from "../static/images/logos";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-5 gap-4">
          <div className="info">
            <Link to="/" className="logo">
              <img src={LogoAlt} alt="" />
            </Link>
            <div className="social">
              <Link to="/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </Link>
              <Link to="/" target="_blank" rel="noopener noreferrer">
                <BsInstagram />
              </Link>
              <Link to="/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </Link>
              <Link to="/" target="_blank" rel="noopener noreferrer">
                <BsTwitterX />
              </Link>
            </div>
          </div>
          <div className="item">
            <h6>Job Seekers</h6>
            <ul>
              <li>
                <Link to="/">Create a resume</Link>
              </li>
              <li>
                <Link to="/">Resume examples</Link>
              </li>
              <li>
                <Link to="/">Resume templates</Link>
              </li>
              <li>
                <Link to="/">Cover Letter templates</Link>
              </li>
              <li>
                <Link to="/">Job search</Link>
              </li>
            </ul>
          </div>
          <div className="item">
            <h6>Career resources</h6>
            <ul>
              <li>
                <Link to="/">Resume Help</Link>
              </li>
              <li>
                <Link to="/">Job interview</Link>
              </li>
              <li>
                <Link to="/">Career</Link>
              </li>
              <li>
                <Link to="/">Cover letter</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="item">
            <h6>Our Company</h6>
            <ul>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">Product Updates</Link>
              </li>
            </ul>
          </div>
          <div className="item">
            <h6>Support</h6>
            <ul>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Terms of services</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
