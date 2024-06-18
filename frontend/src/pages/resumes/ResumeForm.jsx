import { EducationDetail, PersonalDetail, ProfessionalDetail } from "./forms";

const ResumeForm = () => {
  return (
    <>
      <PersonalDetail />
      <hr />
      <ProfessionalDetail />
      <hr />
      <EducationDetail />
      <hr />
    </>
  );
};

export default ResumeForm;
