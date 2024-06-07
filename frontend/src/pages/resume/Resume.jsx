import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoIosArrowRoundBack } from "react-icons/io";

import { ResumeForm, ResumeOverview } from "./index";
import { resetResumeState } from "../../store/slices/resumeSlice";

const Resume = () => {
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(resetResumeState());
  };

  return (
    <div className="resume-container">
      <Link
        to="/dashboard/resumes"
        className="go-back-btn"
        onClick={handleGoBack}
      >
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
