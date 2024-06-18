import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumes: [],
  detail: {
    templateId: "",
    resumeId: "",
    user: "",
  },
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
    photo: "",
  },
  professions: [
    {
      _id: "",
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
      _id: "",
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
  name: "alert",
  initialState,
  reducers: {
    addResume: (state, action) => {
      state.resumes.push(action.payload);
    },
    createResume: (state, action) => {
      state.detail = action.payload;
    },
    removeResume: (state, action) => {
      state.resumes = state.resumes.filter(
        (resume) => resume._id !== action.payload
      );
    },

    setCurrentResume: (state, action) => {
      state.detail = action.payload;
    },
    resetResumeState: () => {
      return initialState;
    },

    updatePersonalDetail: (state, action) => {
      state.personalDetail = { ...state.personalDetail, ...action.payload };
    },

    setProfessions: (state, action) => {
      state.professions = action.payload;
    },
    addProfessionalDetail: (state, action) => {
      state.professions.push(action.payload);
    },
    deleteProfessionalDetail: (state, action) => {
      const professionIndex = action.payload;
      state.professions = state.professions.filter(
        (index) => index !== professionIndex
      );
    },
    updateProfessionalDetail: (state, action) => {
      state.professions = { ...state.professions, ...action.payload };
    },

    setEducations: (state, action) => {
      state.educations = action.payload;
    },
    addEducationDetail: (state, action) => {
      state.educations.push(action.payload);
    },
    deleteEducationDetail: (state, action) => {
      const educationIndex = action.payload;
      state.educations = state.educations.filter(
        (index) => index !== educationIndex
      );
    },
    updateEducationDetail: (state, action) => {
      state.educations = { ...state.educations, ...action.payload };
    },
  },
});

export const {
  addResume,
  createResume,
  removeResume,
  setCurrentResume,
  resetResumeState,
  updatePersonalDetail,

  setProfessions,
  addProfessionalDetail,
  deleteProfessionalDetail,
  updateProfessionalDetail,

  setEducations,
  addEducationDetail,
  deleteEducationDetail,
  updateEducationDetail,
} = resumeSlice.actions;

export default resumeSlice.reducer;
