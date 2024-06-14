import axios from "axios";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { useFormik, FieldArray, FormikProvider } from "formik";

import { showAlert } from "../../../store/slices/alertSlice";
import { updateProfessionalDetail } from "../../../store/slices/resumeSlice";
import { FormInput, FormText, FormCheck } from "../../../components/index";
import { professionalDetailSchema } from "../../../schemas/index";
import { debounce } from "../../../utils/debounce";

const ProfessionalDetail = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);
  const fetchedResumeDetail = resume;

  // On Submit Function
  const onSubmitHandler = async (values, { setSubmitting }) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      dispatch(
        showAlert({ message: "Unauthorized: No token found", type: "error" })
      );
      setSubmitting(false);
      return;
    }

    try {
      // const response = await axios.patch(
      //   `${import.meta.env.VITE_API_BASE_URL}/resume/${
      //     resume.detail.resumeId
      //   }?action=update-profession`,
      //   values,
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );
      // console.log(response.data);
      dispatch(showAlert({ message: "Details Updated", type: "success" }));
    } catch (error) {
      dispatch(
        showAlert({
          message: error.response?.data?.message || "Error updating details",
          type: "error",
        })
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Formik
  const formik = useFormik({
    initialValues: {
      professions: fetchedResumeDetail.professions || [],
    },
    validationSchema: professionalDetailSchema,
    onSubmit: onSubmitHandler,
  });

  const { values, handleChange, handleSubmit, setFieldValue } = formik;
  console.log(values.professions);

  // Debounced submission to handle form changes
  // const debouncedSubmit = useCallback(
  //   debounce(() => {
  //     formik.submitForm();
  //   }, 5000),
  //   [formik]
  // );

  // Watch for form value changes
  // useEffect(() => {
  //   if (formik.dirty) {
  //     debouncedSubmit();
  //   }
  // }, [formik.values, debouncedSubmit]);

  // Add Experience
  const handleAddExperience = async (values, { setSubmitting }) => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        dispatch(
          showAlert({ message: "Unauthorized: No token found", type: "error" })
        );
        setSubmitting(false);
        return;
      }
    } catch (error) {
      dispatch(
        showAlert({
          message: error.response?.data?.message || "Error Adding Experience",
          type: "error",
        })
      );
    }
    setFieldValue("professions", [
      ...values.professions,
      {
        title: "",
        employer: "",
        currentlyWorking: false,
        startDate: "",
        endDate: "",
        city: "",
        description: "",
        isOpen: true,
      },
    ]);
  };

  // Toggle Experience Card
  const toggleExperienceVisibility = (index) => {
    setFieldValue(
      `professions[${index}].isOpen`,
      !values.professions[index].isOpen
    );
  };

  // Delete Experience Card
  const handleDeleteExperience = (index) => {
    const updatedExperiences = values.professions.filter((_, i) => i !== index);
    setFieldValue("professions", updatedExperiences);
  };

  // Checkbox Change
  const handleCheckboxChange = (index) => {
    values.professions.forEach((_, i) => {
      if (i !== index) {
        setFieldValue(`professions[${i}].currentlyWorking`, false, false);
      }
    });
    setFieldValue(
      `professions[${index}].currentlyWorking`,
      !values.professions[index].currentlyWorking,
      false
    );
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
                <div key={index} className="content">
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
                        onClick={() => handleDeleteExperience(index)}
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
