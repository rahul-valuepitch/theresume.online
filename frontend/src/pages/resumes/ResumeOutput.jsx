import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ResumeOutput = () => {
  const navigate = useNavigate();
  const resume = useSelector((state) => state.resume);

  useEffect(() => {
    if (!resume) {
      navigate("/dashboard");
    }
  }, [resume, navigate]);

  if (!resume) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Resume</h1>
      <p>Template ID: {resume.detail.templateId}</p>
      <p>Resume ID: {resume.detail.resumeId}</p>
      <p>User ID: {resume.detail.user}</p>
    </>
  );
};

export default ResumeOutput;
