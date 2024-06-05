import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";

import { FormInput } from "../../../components/index";

const Links = () => {
  const [link, setLink] = useState([
    {
      label: "",
      link: "",
      isOpen: false,
    },
  ]);

  const handleAddLink = () => {
    setLink([
      ...link,
      {
        label: "",
        link: "",
        isOpen: true,
      },
    ]);
  };

  const handleLinkChange = (index, event) => {
    const updatedLink = [...link];
    updatedLink[index][event.target.name] = event.target.value;
    setLink(updatedLink);
  };

  const toggleLinkVisibility = (index) => {
    const updatedLink = [...link];
    updatedLink[index].isOpen = !updatedLink[index].isOpen;
    setLink(updatedLink);
  };

  const handleDeleteLink = (index) => {
    const updatedLink = link.filter((_, i) => i !== index);
    setLink(updatedLink);
  };

  return (
    <div className="item">
      <h4 className="sub-heading mb-5">Websites & Links</h4>

      {link.map((item, index) => (
        <div key={index} className="content">
          <div className="head">
            <div className="text">
              <h5>{item.label || `Link Name`}</h5>
              <h6>
                <span>{item.link || `#`}</span>
              </h6>
            </div>
            <div className="action">
              <button
                className="collapse-btn"
                onClick={() => toggleLinkVisibility(index)}
              >
                <IoIosArrowDown />
              </button>
              <button
                className="remove-btn"
                onClick={() => handleDeleteLink(index)}
              >
                <GoTrash />
              </button>
            </div>
          </div>

          {item.isOpen && (
            <div className="body">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <FormInput
                    label="Label"
                    name="label"
                    type="text"
                    className="mb-0"
                    required
                    value={item.label}
                    onChange={(event) => handleLinkChange(index, event)}
                  />
                </div>
                <div>
                  <FormInput
                    label="Link"
                    name="link"
                    type="text"
                    className="mb-0"
                    required
                    value={item.link}
                    onChange={(event) => handleLinkChange(index, event)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      <button className="toggle-info-btn" onClick={handleAddLink}>
        <span className="me-2">Add New Link</span>
        <FaPlus />
      </button>
    </div>
  );
};

export default Links;
