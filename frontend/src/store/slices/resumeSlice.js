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
      _id: "",
      label: "",
      link: "",
    },
  ],
  skills: [
    {
      _id: "",
      skill: "",
      level: "",
    },
  ],
  languages: [
    {
      _id: "",
      label: "",
      level: "",
    },
  ],
  courses: [
    {
      _id: "",
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
      _id: "",
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
      _id: "",
      label: "",
    },
  ],
  references: [
    {
      _id: "",
      referenceFullname: "",
      company: "",
      phone: "",
      email: "",
    },
  ],
  extraCurricular: [
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
  customSections: [
    {
      _id: "",
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
    resetResume: () => initialState,

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
      state.professions = action.payload;
    },
    updateProfessionalDetail: (state, action) => {
      const updatedProfession = action.payload;
      const index = state.professions.findIndex(
        (profession) => profession._id === updatedProfession._id
      );
      if (index !== -1) {
        state.professions[index] = updatedProfession;
      }
    },

    setEducations: (state, action) => {
      state.educations = action.payload;
    },
    addEducationDetail: (state, action) => {
      state.educations.push(action.payload);
    },
    deleteEducationDetail: (state, action) => {
      state.educations = action.payload;
    },
    updateEducationDetail: (state, action) => {
      const updatedEducation = action.payload;
      const index = state.educations.findIndex(
        (education) => education._id === updatedEducation._id
      );
      if (index !== -1) {
        state.educations[index] = updatedEducation;
      }
    },

    setLinks: (state, action) => {
      state.links = action.payload;
    },
    addLink: (state, action) => {
      state.links.push(action.payload);
    },
    deleteLink: (state, action) => {
      state.links = action.payload;
    },
    updateLink: (state, action) => {
      const updatedLink = action.payload;
      const index = state.links.findIndex(
        (link) => link._id === updatedLink._id
      );
      if (index !== -1) {
        state.links[index] = updatedLink;
      }
    },
  },
});

export const {
  resetResume,

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

  setLinks,
  addLink,
  deleteLink,
  updateLink,
} = resumeSlice.actions;

export default resumeSlice.reducer;
