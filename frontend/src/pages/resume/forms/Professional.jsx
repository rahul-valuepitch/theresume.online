import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

import { FormInput, FormText } from "../../../components/index";

const Professional = () => {
  const [experiences, setExperiences] = useState([
    {
      title: "",
      employer: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
      isOpen: false,
    },
  ]);

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        title: "",
        employer: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
        isOpen: false,
      },
    ]);
  };

  const handleExperienceChange = (index, event) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][event.target.name] = event.target.value;
    setExperiences(updatedExperiences);
  };

  const toggleExperienceVisibility = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index].isOpen = !updatedExperiences[index].isOpen;
    setExperiences(updatedExperiences);
  };

  return (
    <div className="item">
      <h4 className="sub-heading mb-5">Employment History</h4>

      {experiences.map((experience, index) => (
        <div key={index} className="content">
          <div className="head">
            <div className="text">
              <h5>Job Title</h5>
              <h6>
                {experience.startDate} - {experience.endDate}
              </h6>
            </div>
            <button onClick={() => toggleExperienceVisibility(index)}>
              <IoIosArrowDown />
            </button>
          </div>
          {experience.isOpen && (
            <div className="body">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <FormInput
                    label="Job Title"
                    name="title"
                    type="text"
                    className="mb-0"
                    required
                    value={experience.title}
                    onChange={(event) => handleExperienceChange(index, event)}
                  />
                </div>
                <div>
                  <FormInput
                    label="Employer"
                    name="employer"
                    type="text"
                    className="mb-0"
                    required
                    value={experience.employer}
                    onChange={(event) => handleExperienceChange(index, event)}
                  />
                </div>
                <div>
                  <FormInput
                    label="Start Date"
                    name="startDate"
                    type="date"
                    className="mb-0"
                    required
                    value={experience.startDate}
                    onChange={(event) => handleExperienceChange(index, event)}
                  />
                </div>
                <div>
                  <FormInput
                    label="End Date"
                    name="endDate"
                    type="date"
                    className="mb-0"
                    required
                    value={experience.endDate}
                    onChange={(event) => handleExperienceChange(index, event)}
                  />
                </div>
                <div>
                  <FormInput
                    label="City"
                    name="city"
                    type="text"
                    className="mb-0"
                    required
                    value={experience.city}
                    onChange={(event) => handleExperienceChange(index, event)}
                  />
                </div>
                <div className="col-span-2">
                  <FormText
                    label="Description"
                    name="description"
                    rows="4"
                    className="mb-0"
                    required
                    value={experience.description}
                    onChange={(event) => handleExperienceChange(index, event)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      <button className="toggle-info-btn" onClick={handleAddExperience}>
        <span className="me-2">Add New Experience</span>
        <FaPlus />
      </button>
    </div>
  );
};

export default Professional;
