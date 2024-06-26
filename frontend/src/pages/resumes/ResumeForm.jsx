import {
  CourseDetail,
  EducationDetail,
  HobbieDetail,
  InternshipDetail,
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
      <InternshipDetail />
      <hr />
      <HobbieDetail />
      <hr />
    </>
  );
};

export default ResumeForm;
