import {
  CourseDetail,
  EducationDetail,
  LanguageDetail,
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
      <LanguageDetail />
      <hr />
      <CourseDetail />
      <hr />
    </>
  );
};

export default ResumeForm;
