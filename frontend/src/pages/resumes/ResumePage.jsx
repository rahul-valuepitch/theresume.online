import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowRoundBack } from "react-icons/io";

import { ResumeForm, ResumeOutput } from "./index";
import { setCurrentResume } from "../../store/slices/resumeSlice";
import { showAlert } from "../../store/slices/alertSlice";

const ResumePage = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume.detail);
  const resumeId = resume.resumeId;

  console.log(resume);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        dispatch(
          showAlert({ message: "Unauthorized: No token found", type: "error" })
        );
        return;
      }
      console.log(token);

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
        console.log(response.data.data);
        dispatch(setCurrentResume({}));
      } catch (error) {
        console.error(error);
        dispatch(
          showAlert({
            message: `Error fetching resume :: ${error}`,
            type: "error",
          })
        );
      }
    };
    fetchData();
  }, [dispatch, resumeId]);

  return (
    <>
      <div className="resume-container">
        <Link to="/dashboard/resumes" className="go-back-btn">
          <IoIosArrowRoundBack />
          <span>Go Back</span>
        </Link>
        <div className="resume-form">
          <ResumeForm />
        </div>
        <div className="resume-overview">
          <ResumeOutput />
        </div>
      </div>
    </>
  );
};

export default ResumePage;
