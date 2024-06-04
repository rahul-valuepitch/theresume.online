import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <>
      <h1 className="mb-5">No Ressumes Created!</h1>
      <Link to="/resumes" className="button">
        Create Resume
      </Link>
    </>
  );
};

export default Resume;
