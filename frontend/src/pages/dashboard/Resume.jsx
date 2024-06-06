import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { updateDetail } from "../../store/slices/resumeSlice";

const Resume = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateResume = async () => {
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/resume/?templateId=66603368b138c1a815b619ea`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const templateId = String(response.data.data.template);
      const resumeId = String(response.data.data._id);
      dispatch(updateDetail({ templateId, resumeId }));
      navigate("/resumes/create");
    } catch (error) {
      console.error("Error creating resume:", error);
    }
  };

  return (
    <>
      <h1 className="mb-5">No Ressumes Created!</h1>
      <button onClick={handleCreateResume} className="button">
        Create Resume
      </button>
    </>
  );
};

export default Resume;
