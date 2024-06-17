import axios from "axios";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { useFormik, FieldArray, FormikProvider } from "formik";

import { showAlert } from "../../../store/slices/alertSlice";
import {
  setProfessions,
  addProfessionalDetail,
  deleteProfessionalDetail,
} from "../../../store/slices/resumeSlice";
import { FormInput, FormText, FormCheck } from "../../../components/index";
import { professionalDetailSchema } from "../../../schemas/index";
import { debounce } from "../../../utils/debounce";

const ProfessionalDetail = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);
  const fetchedResumeDetail = resume;

  const resumeId = fetchedResumeDetail.detail.resumeId;

  // On Submit Function
  const onSubmitHandler = () => {
    console.log("Test");
  };

  // Formik
  const formik = useFormik({
    initialValues: {
      professions: fetchedResumeDetail.professions || [],
    },
    validationSchema: professionalDetailSchema,
    onSubmit: onSubmitHandler,
    enableReinitialize: true,
  });

  const { values, handleChange, handleSubmit, setFieldValue } = formik;

  // Fetch Professions
  const fetchProfessions = async (resumeId) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      dispatch(
        showAlert({ message: "Unauthorized: No token found", type: "error" })
      );
      return;
    }

    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/resume/${resumeId}?action=get-all-profession`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data.data.professions;
      dispatch(setProfessions(data || []));
      setFieldValue("professions", data || []);
    } catch (error) {
      dispatch(
        showAlert({
          message:
            error.response?.data?.message || "Error fetching professions",
          type: "error",
        })
      );
    }
  };
  useEffect(() => {
    if (resumeId) {
      fetchProfessions(resumeId);
    }
  }, [resumeId]);

  // Add Experience
  const handleAddExperience = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      dispatch(
        showAlert({ message: "Unauthorized: No token found", type: "error" })
      );
      return;
    }

    try {
      const response = await axios.patch(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/resume/${resumeId}?action=add-profession`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newProfession = response.data.data.find(
        (profession) => !profession.title && !profession.employer
      );

      console.log(response.data.data);

      dispatch(addProfessionalDetail(newProfession));
      setFieldValue("professions", [...values.professions, newProfession]);
      dispatch(
        showAlert({ message: "Profession added successfully", type: "success" })
      );
    } catch (error) {
      dispatch(
        showAlert({
          message: error.response?.data?.message || "Error Adding Experience",
          type: "error",
        })
      );
    }
  };

  // Delete Experience Card
  const handleDeleteExperience = async (professionId) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      dispatch(
        showAlert({ message: "Unauthorized: No token found", type: "error" })
      );
      return;
    }

    try {
      await axios.patch(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/resume/${resumeId}?action=delete-profession&pid=${professionId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedExperiences = values.professions.filter(
        (profession) => profession._id !== professionId
      );
      setFieldValue("professions", updatedExperiences);
      dispatch(deleteProfessionalDetail(professionId));
      dispatch(
        showAlert({
          message: "Profession deleted successfully",
          type: "success",
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(
        showAlert({
          message: error.response?.data?.message || "Error Deleting Experience",
          type: "error",
        })
      );
    }
  };

  // Toggle Experience Card
  const toggleExperienceVisibility = (index) => {
    const updatedProfessions = values.professions.map((profession, i) => {
      if (i === index) {
        return {
          ...profession,
          isOpen: !profession.isOpen,
        };
      }
      return profession;
    });
    setFieldValue("professions", updatedProfessions);
  };

  // Checkbox Change
  const handleCheckboxChange = (professionId) => {
    const updatedProfessions = values.professions.map((profession) => {
      if (profession._id === professionId) {
        return {
          ...profession,
          currentlyWorking: !profession.currentlyWorking,
        };
      }
      return profession;
    });
    setFieldValue("professions", updatedProfessions);
    formik.validateForm();
  };

  return (
    <FormikProvider value={formik}>
      <form onSubmit={handleSubmit} className="item">
        <h4 className="sub-heading mb-5">Employment History</h4>

        <FieldArray
          name="professions"
          render={() => (
            <>
              {values.professions.map((profession, index) => (
                <div
                  key={index}
                  className="content"
                  data-profession-id={profession._id}
                >
                  <div className="head">
                    <div className="text">
                      <h5>{profession.title || `Job Name`}</h5>
                      <h6>
                        <span>{profession.startDate || `Start Date`}</span>
                        <span>-</span>
                        <span>
                          {profession.currentlyWorking
                            ? "Present"
                            : profession.endDate || `End Date`}
                        </span>
                      </h6>
                    </div>
                    <div className="action">
                      <button
                        type="button"
                        className="collapse-btn"
                        onClick={() => toggleExperienceVisibility(index)}
                      >
                        <IoIosArrowDown />
                      </button>
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => handleDeleteExperience(profession._id)}
                      >
                        <GoTrash />
                      </button>
                    </div>
                  </div>
                  {profession.isOpen && (
                    <div className="body">
                      <div className="grid grid-cols-2 gap-5">
                        <div>
                          <FormInput
                            label="Job Title"
                            name={`professions[${index}].title`}
                            type="text"
                            className="mb-0"
                            required
                            value={profession.title}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <FormInput
                            label="Employer"
                            name={`professions[${index}].employer`}
                            type="text"
                            className="mb-0"
                            required
                            value={profession.employer}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-span-2">
                          <FormCheck
                            label="Currently working in this company"
                            name={`professions[${index}].currentlyWorking`}
                            checked={profession.currentlyWorking}
                            onChange={() => handleCheckboxChange(index)}
                          />
                        </div>
                        <div>
                          <FormInput
                            label="Start Date"
                            name={`professions[${index}].startDate`}
                            type="date"
                            className="mb-0"
                            required
                            value={profession.startDate}
                            onChange={handleChange}
                          />
                        </div>
                        {!profession.currentlyWorking && (
                          <div>
                            <FormInput
                              label="End Date"
                              name={`professions[${index}].endDate`}
                              type="date"
                              className="mb-0"
                              required
                              value={profession.endDate}
                              onChange={handleChange}
                            />
                          </div>
                        )}
                        <div>
                          <FormInput
                            label="City"
                            name={`professions[${index}].city`}
                            type="text"
                            className="mb-0"
                            required
                            value={profession.city}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-span-2">
                          <FormText
                            label="Description"
                            name={`professions[${index}].description`}
                            rows="4"
                            className="mb-0"
                            required
                            value={profession.description}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        />

        <button
          type="button"
          className="toggle-info-btn"
          onClick={handleAddExperience}
        >
          <span className="me-2">Add New Experience</span>
          <FaPlus />
        </button>
      </form>
    </FormikProvider>
  );
};

export default ProfessionalDetail;
