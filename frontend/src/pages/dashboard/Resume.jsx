import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineEdit } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

import {
  updateDetail,
  setResumes,
  addResume,
  removeResume,
  setCurrentResume,
} from "../../store/slices/resumeSlice";
import { showAlert } from "../../store/slices/alertSlice";

const Resume = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resumeResumes = useSelector((state) => state.resume.resumes);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/resume`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        dispatch(setResumes(response.data.data));
      } catch (error) {
        console.error("Error fetching resumes:", error);
        dispatch(
          showAlert({ message: "Error fetching resumes", type: "error" })
        );
      }
    };

    fetchResumes();
  }, [dispatch]);

  const handleCreateResume = async () => {
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/resume/?templateId=6666c6894f54cada58060652`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const newResume = response.data.data;
      dispatch(
        updateDetail({
          templateId: newResume.template,
          resumeId: newResume._id,
        })
      );
      dispatch(addResume(newResume));
      navigate(`/resumes/create/${newResume._id}`);
    } catch (error) {
      console.error("Error creating resume:", error);
      dispatch(showAlert({ message: "Error creating resume", type: "error" }));
    }
  };

  const handleEditResume = (resume) => {
    dispatch(setCurrentResume(resume._id));
    navigate(`/resumes/create/${resume._id}`);
  };

  const handleDeleteResume = async (resumeId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/resume/${resumeId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(removeResume(resumeId));
      dispatch(showAlert({ message: "Resume Deleted", type: "success" }));
    } catch (error) {
      console.error("Error deleting resume:", error);
      dispatch(showAlert({ message: "Error deleting resume", type: "error" }));
    }
  };

  const allResumes = [...resumeResumes];

  return (
    <>
      <h1 className="sub-heading mb-5">My Resumes ({allResumes.length})</h1>
      {allResumes.length === 0 ? (
        <p>No resumes created!</p>
      ) : (
        <ul className="grid grid-cols-3 gap-5">
          {allResumes.map((resume, i) => (
            <li key={resume._id} className="card resume-card">
              <div className="card-body">
                <h2>
                  {resume.title}
                  {i + 1}
                </h2>
                <p>
                  Template ID: <br /> {resume.template}
                </p>
                <p>
                  Resume ID: <br /> {resume._id}
                </p>
                <button
                  className="edit-btn"
                  onClick={() => handleEditResume(resume)}
                >
                  <MdOutlineEdit />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteResume(resume._id)}
                >
                  <FiTrash2 />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleCreateResume} className="button mt-5">
        Create Resume
      </button>
    </>
  );
};

export default Resume;
