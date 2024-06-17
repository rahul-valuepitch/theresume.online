import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

import { ResumeForm, ResumeOutput } from "./index";
import {
  resetResumeState,
  setCurrentResume,
  updatePersonalDetail,
} from "../../store/slices/resumeSlice";
import { showAlert } from "../../store/slices/alertSlice";

const ResumePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resume = useSelector((state) => state.resume.detail);
  const resumeId = resume.resumeId;

  const goBackHandler = () => {
    dispatch(resetResumeState());
    navigate("/dashboard/resumes");
  };

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
        const currentResume = response.data.data;
        dispatch(
          setCurrentResume({
            templateId: currentResume.template,
            resumeId: currentResume._id,
            user: currentResume.user,
          })
        );
        dispatch(updatePersonalDetail(currentResume.personalDetail));
      } catch (error) {
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
        <button
          to="/dashboard/resumes"
          className="go-back-btn"
          onClick={goBackHandler}
        >
          <IoIosArrowRoundBack />
          <span>Go Back</span>
        </button>
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
