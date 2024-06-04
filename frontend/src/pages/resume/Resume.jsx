import { IoIosArrowRoundBack } from "react-icons/io";

import { ResumeForm, ResumeOverview } from "./index";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="resume-container">
      <Link to="/dashboard/resumes" className="go-back-btn">
        <IoIosArrowRoundBack />
        <span>Go Back</span>
      </Link>
      <div className="resume-form">
        <ResumeForm />
      </div>
      <div className="resume-overview">
        <ResumeOverview />
      </div>
    </div>
  );
};

export default Resume;
