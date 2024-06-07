import axios from "axios";
import { useState, useCallback } from "react";
import { FaPlus } from "react-icons/fa6";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { FormInput, FormSelect, FormText } from "../../../components/index";
import { DummyUser } from "../../../static/images/users/index";
import { showAlert } from "../../../store/slices/alertSlice";
import { updatePersonalDetail } from "../../../store/slices/resumeSlice";
import { debounce } from "../../../utils/debounce";

const PersonalDetail = () => {
  const dispatch = useDispatch();
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const resumeId = useSelector((state) => state.resume.detail._id);

  const initialValues = {
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
  };

  const debouncedUpdate = useCallback(
    debounce(async (field, value) => {
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
          }/resume/${resumeId}?action=update-resume-profile`,
          { [field]: value },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        dispatch(updatePersonalDetail({ [field]: value }));
        dispatch(showAlert({ message: "Details Updated", type: "success" }));
      } catch (error) {
        console.log("Error updating personal details:", error);
        dispatch(
          showAlert({
            message: error.response?.data?.message || "Error updating details",
            type: "error",
          })
        );
      }
    }, 500),
    [dispatch, resumeId]
  );

  const handleChangeWithDebounce = (e) => {
    const { name, value } = e.target;
    debouncedUpdate(name, value);
    formik.handleChange(e);
  };

  // Formik
  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { setSubmitting }) => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        dispatch(
          showAlert({ message: "Unauthorized: No token found", type: "error" })
        );
        setSubmitting(false);
        return;
      }

      try {
        const response = await axios.patch(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/resume/${resumeId}?action=update-resume-profile`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        dispatch(updatePersonalDetail(values));
        dispatch(showAlert({ message: "Details Updated", type: "success" }));
      } catch (error) {
        console.log("Error updating personal details:", error);
        dispatch(
          showAlert({ message: error.response.data.message, type: "error" })
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo((prev) => !prev);
  };

  return (
    <div className="item">
      <h4 className="sub-heading mb-5">Personal Detail</h4>
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-2">
          <div className="image">
            <img src={DummyUser} alt="" />
            <div className="actions">
              <button>
                <FaPlus /> Upload Photo
              </button>
            </div>
          </div>
        </div>
        <div>
          <FormInput
            label="Job Title"
            name="jobTitle"
            type="text"
            className="mb-0"
            required
            value={formik.values.jobTitle}
            onChange={handleChangeWithDebounce}
            onBlur={formik.handleBlur}
            error={formik.touched.jobTitle && formik.errors.jobTitle}
          />
        </div>
        <div>
          <FormInput
            label="First Name"
            name="firstName"
            type="text"
            className="mb-0"
            required
            value={formik.values.firstName}
            onChange={handleChangeWithDebounce}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && formik.errors.firstName}
          />
        </div>
        <div>
          <FormInput
            label="Middle Name"
            name="middleName"
            type="text"
            className="mb-0"
            required
            value={formik.values.middleName}
            onChange={handleChangeWithDebounce}
            onBlur={formik.handleBlur}
            error={formik.touched.middleName && formik.errors.middleName}
          />
        </div>
        <div>
          <FormInput
            label="Last Name"
            name="lastName"
            type="text"
            className="mb-0"
            required
            value={formik.values.lastName}
            onChange={handleChangeWithDebounce}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && formik.errors.lastName}
          />
        </div>
        <div>
          <FormInput
            label="Email"
            name="email"
            type="email"
            className="mb-0"
            required
            value={formik.values.email}
            onChange={handleChangeWithDebounce}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
          />
        </div>
        <div>
          <FormInput
            label="Phone"
            name="phone"
            type="number"
            className="mb-0"
            required
            value={formik.values.phone}
            onChange={handleChangeWithDebounce}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && formik.errors.phone}
          />
        </div>
        <div className="col-span-2">
          <FormText
            label="Summary"
            name="summary"
            required
            className="mb-0"
            value={formik.values.summary}
            onChange={handleChangeWithDebounce}
            onBlur={formik.handleBlur}
            error={formik.touched.summary && formik.errors.summary}
          />
        </div>
      </div>

      <button className="toggle-info-btn" onClick={toggleAdditionalInfo}>
        {showAdditionalInfo ? (
          <>
            Hide Additional Information <MdOutlineKeyboardArrowUp />
          </>
        ) : (
          <>
            Edit Additional Information <MdOutlineKeyboardArrowDown />
          </>
        )}
      </button>

      {showAdditionalInfo && (
        <div className="grid grid-cols-2 gap-5">
          <div>
            <FormInput
              label="Address"
              name="address"
              type="text"
              className="mb-0"
              required
              value={formik.values.address}
              onChange={handleChangeWithDebounce}
              onBlur={formik.handleBlur}
              error={formik.touched.address && formik.errors.address}
            />
          </div>
          <div>
            <FormInput
              label="City"
              name="city"
              type="text"
              className="mb-0"
              required
              value={formik.values.city}
              onChange={handleChangeWithDebounce}
              onBlur={formik.handleBlur}
              error={formik.touched.city && formik.errors.city}
            />
          </div>
          <div>
            <FormInput
              label="State"
              name="state"
              type="text"
              className="mb-0"
              required
              value={formik.values.state}
              onChange={handleChangeWithDebounce}
              onBlur={formik.handleBlur}
              error={formik.touched.state && formik.errors.state}
            />
          </div>
          <div>
            <FormInput
              label="Zip Code"
              name="zip"
              type="text"
              className="mb-0"
              required
              value={formik.values.zip}
              onChange={handleChangeWithDebounce}
              onBlur={formik.handleBlur}
              error={formik.touched.zip && formik.errors.zip}
            />
          </div>
          <div>
            <FormInput
              label="Driving Licenses"
              name="drivingLicense"
              type="text"
              className="mb-0"
              required
              value={formik.values.drivingLicense}
              onChange={handleChangeWithDebounce}
              onBlur={formik.handleBlur}
              error={
                formik.touched.drivingLicense && formik.errors.drivingLicense
              }
            />
          </div>
          <div>
            <FormInput
              label="Nationality"
              name="nationality"
              type="text"
              className="mb-0"
              required
              value={formik.values.nationality}
              onChange={handleChangeWithDebounce}
              onBlur={formik.handleBlur}
              error={formik.touched.nationality && formik.errors.nationality}
            />
          </div>
          <div>
            <FormInput
              label="Place Of Birth"
              name="placeOfBirth"
              type="text"
              className="mb-0"
              required
              value={formik.values.placeOfBirth}
              onChange={handleChangeWithDebounce}
              onBlur={formik.handleBlur}
              error={formik.touched.placeOfBirth && formik.errors.placeOfBirth}
            />
          </div>
          <div>
            <FormInput
              label="Date Of Birth"
              name="dateOfBirth"
              type="date"
              className="mb-0"
              required
              value={formik.values.dateOfBirth}
              onChange={handleChangeWithDebounce}
              onBlur={formik.handleBlur}
              error={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
            />
          </div>
          <div>
            <FormSelect
              label="Gender"
              name="gender"
              className="mb-0"
              required
              value={formik.values.gender}
              onChange={handleChangeWithDebounce}
              onBlur={formik.handleBlur}
              error={formik.touched.gender && formik.errors.gender}
              options={[
                { label: "---", value: "" },
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
                { label: "Others", value: "Others" },
              ]}
            />
          </div>
          <div>
            <FormSelect
              label="Maritial Status"
              name="maritialStatus"
              className="mb-0"
              required
              value={formik.values.maritalStatus}
              onChange={handleChangeWithDebounce}
              onBlur={formik.handleBlur}
              error={
                formik.touched.maritalStatus && formik.errors.maritalStatus
              }
              options={[
                { label: "---", value: "" },
                { label: "Unmarried", value: "Unmarried" },
                { label: "Married", value: "Married" },
                { label: "Divorced", value: "Divorced" },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalDetail;
