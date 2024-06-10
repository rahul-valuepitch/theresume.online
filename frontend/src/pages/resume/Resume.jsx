import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowRoundBack } from "react-icons/io";

import { ResumeForm, ResumeOverview } from "./index";
import { resetResumeState, setResumes } from "../../store/slices/resumeSlice";
import { showAlert } from "../../store/slices/alertSlice";

const Resume = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume.detail);
  const resumeId = resume._id;

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        dispatch(
          showAlert({ message: "Unauthorized: No token found", type: "error" })
        );
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/resume/${resumeId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(setResumes(response.data));
      } catch (error) {
        console.error("Error fetching resume data:", error);
      }
    };

    if (resumeId) {
      fetchData();
    }

    return () => {
      dispatch(resetResumeState());
    };
  }, [dispatch, resumeId]);

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
