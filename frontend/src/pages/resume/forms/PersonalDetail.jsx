import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useDispatch } from "react-redux";

import { FormInput, FormSelect, FormText } from "../../../components/index";
import { DummyUser } from "../../../static/images/users/index";
import { showAlert } from "../../../store/slices/alertSlice";

const PersonalDetail = () => {
  const dispatch = useDispatch();

  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo((prev) => !prev);
  };

  const handleClick = () => {
    dispatch(showAlert({ message: "Details Updated", type: "success" }));
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
          />
        </div>
        <div>
          <FormInput
            label="First Name"
            name="firstName"
            type="text"
            className="mb-0"
            required
          />
        </div>
        <div>
          <FormInput
            label="Middle Name"
            name="middleName"
            type="text"
            className="mb-0"
            required
          />
        </div>
        <div>
          <FormInput
            label="Last Name"
            name="lastName"
            type="text"
            className="mb-0"
            required
          />
        </div>
        <div>
          <FormInput
            label="Email"
            name="email"
            type="email"
            className="mb-0"
            required
          />
        </div>
        <div>
          <FormInput
            label="Phone"
            name="phone"
            type="number"
            className="mb-0"
            required
          />
        </div>
        <div className="col-span-2">
          <FormText label="Summary" name="summary" required className="mb-0" />
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
            />
          </div>
          <div>
            <FormInput
              label="City"
              name="city"
              type="text"
              className="mb-0"
              required
            />
          </div>
          <div>
            <FormInput
              label="State"
              name="state"
              type="text"
              className="mb-0"
              required
            />
          </div>
          <div>
            <FormInput
              label="Zip Code"
              name="zip"
              type="text"
              className="mb-0"
              required
            />
          </div>
          <div>
            <FormInput
              label="Driving Licenses"
              name="drivingLicense"
              type="text"
              className="mb-0"
              required
            />
          </div>
          <div>
            <FormInput
              label="Nationality"
              name="nationality"
              type="text"
              className="mb-0"
              required
            />
          </div>
          <div>
            <FormInput
              label="Place Of Birth"
              name="placeOfBirth"
              type="text"
              className="mb-0"
              required
            />
          </div>
          <div>
            <FormInput
              label="Date Of Birth"
              name="dateOfBirth"
              type="date"
              className="mb-0"
              required
            />
          </div>
          <div>
            <FormSelect
              label="Gender"
              name="gender"
              className="mb-0"
              required
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

      <button onClick={handleClick}>Show Alert</button>
    </div>
  );
};

export default PersonalDetail;
