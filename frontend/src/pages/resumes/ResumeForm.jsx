import {
  EducationDetail,
  LinkDetails,
  PersonalDetail,
  ProfessionalDetail,
  SkillDetail,
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
      <SkillDetail />
      <hr />
    </>
  );
};

export default ResumeForm;
