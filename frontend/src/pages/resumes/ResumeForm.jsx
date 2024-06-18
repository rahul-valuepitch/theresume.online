import {
  EducationDetail,
  LinkDetails,
  PersonalDetail,
  ProfessionalDetail,
} from "./forms";

const ResumeForm = () => {
  return (
    <>
      <PersonalDetail />
      <hr />
      <ProfessionalDetail />
      <hr />
      <EducationDetail />
      <hr />
      <LinkDetails />
      <hr />
    </>
  );
};

export default ResumeForm;
