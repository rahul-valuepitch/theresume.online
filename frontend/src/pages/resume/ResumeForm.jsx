import {
  Courses,
  Custom,
  Education,
  ExtraCurricular,
  Hobbies,
  Internship,
  Languages,
  Links,
  PersonalDetail,
  Professional,
  References,
  ResumeHeader,
  Skills,
} from "./forms";

const ResumeForm = () => {
  return (
    <>
      <ResumeHeader />
      <PersonalDetail />
      <hr />
      <Professional />
      <hr />
      <Education />
      <hr />
      <Links />
      <hr />
      <Skills />
      <hr />
      <Languages />
      <hr />
      <Courses />
      <hr />
      <Internship />
      <hr />
      <Hobbies />
      <hr />
      <References />
      <hr />
      <ExtraCurricular />
      <hr />
      <Custom />
    </>
  );
};

export default ResumeForm;
