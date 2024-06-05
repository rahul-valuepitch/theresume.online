import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalDetail: {
    jobTitle: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    drivingLicense: "",
    nationality: "",
    placeOfBirth: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    summary: "",
  },
  professions: [
    {
      title: "",
      employer: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    },
  ],
  educations: [
    {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    },
  ],
  links: [
    {
      label: "",
      link: "",
    },
  ],
  skills: [
    {
      skill: "",
      level: "",
    },
  ],
  languages: [
    {
      label: "",
      level: "",
    },
  ],
  courses: [
    {
      title: "",
      institute: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    },
  ],
  internship: [
    {
      title: "",
      employer: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    },
  ],
  hobbies: [
    {
      label: "",
    },
  ],
  references: [
    {
      referenceFullname: "",
      company: "",
      phone: "",
      email: "",
    },
  ],
  extraCurricular: [
    {
      title: "",
      employer: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    },
  ],
  customSections: [
    {
      title: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    },
  ],
  error: null,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updatePersonalDetail: (state, action) => {
      state.personalDetail = { ...state.personalDetail, ...action.payload };
    },
    updateProfession: (state, action) => {
      const { index, field, value } = action.payload;
      state.professions[index][field] = value;
    },
    updateEducation: (state, action) => {
      const { index, field, value } = action.payload;
      state.educations[index][field] = value;
    },
    updateLink: (state, action) => {
      const { index, field, value } = action.payload;
      state.links[index][field] = value;
    },
    updateSkill: (state, action) => {
      const { index, field, value } = action.payload;
      state.skills[index][field] = value;
    },
    updateLanguage: (state, action) => {
      const { index, field, value } = action.payload;
      state.languages[index][field] = value;
    },
    updateCourse: (state, action) => {
      const { index, field, value } = action.payload;
      state.courses[index][field] = value;
    },
    updateInternship: (state, action) => {
      const { index, field, value } = action.payload;
      state.internship[index][field] = value;
    },
    updateHobby: (state, action) => {
      const { index, field, value } = action.payload;
      state.hobbies[index][field] = value;
    },
    updateReference: (state, action) => {
      const { index, field, value } = action.payload;
      state.references[index][field] = value;
    },
    updateExtraCurricular: (state, action) => {
      const { index, field, value } = action.payload;
      state.extraCurricular[index][field] = value;
    },
    updateCustomSection: (state, action) => {
      const { index, field, value } = action.payload;
      state.customSections[index][field] = value;
    },
  },
});

export const {
  updatePersonalDetail,
  updateProfession,
  updateEducation,
  updateLink,
  updateSkill,
  updateLanguage,
  updateCourse,
  updateInternship,
  updateHobby,
  updateReference,
  updateExtraCurricular,
  updateCustomSection,
} = resumeSlice.actions;

export default resumeSlice.reducer;
