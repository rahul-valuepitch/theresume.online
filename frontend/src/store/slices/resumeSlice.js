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
  },
});

export const { addResume, createResume, removeResume, setCurrentResume } =
  resumeSlice.actions;

export default resumeSlice.reducer;
