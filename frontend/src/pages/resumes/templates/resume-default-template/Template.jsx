import { FaStar } from "react-icons/fa";

import formatDate from "../../../../utils/dateFormator";
import "./style.css";

const ResumeDefaultTemplate = ({ resume }) => {
  const {
    jobTitle,
    firstName,
    middleName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    zip,
    drivingLicense,
    nationality,
    placeOfBirth,
    dateOfBirth,
    gender,
    maritalStatus,
    summary,
    photo,
  } = resume.personalDetail;
  const languages = resume.languages;
  const hobbies = resume.hobbies;
  const links = resume.links;
  const professions = resume.professions;
  const educations = resume.educations;
  const courses = resume.courses;
  const internships = resume.internship;

  const fullName = `${firstName} ${middleName} ${lastName}`;
  const addressDetails = [address, city, state, zip]
    .filter((detail) => detail)
    .join(", ");

  return (
    <div className="temp-content">
      <h1>{fullName}</h1>
      <h2>{jobTitle}</h2>
      <hr className="divider" />
      <table className="info-container">
        <tbody>
          <tr>
            <td colSpan={3} valign="top">
              {/* Contact Info */}
              <div className="contact-info">
                {email && (
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                )}
                {phone && <p>{phone}</p>}
                {addressDetails && <p>{addressDetails}</p>}

                <hr className="divider" />

                {drivingLicense && (
                  <p>
                    <span>Driving License</span>
                    {drivingLicense}
                  </p>
                )}
                {nationality && (
                  <p>
                    <span>Nationality</span>
                    {nationality}
                  </p>
                )}
                {placeOfBirth && (
                  <p>
                    <span>Place Of Birth</span>
                    {placeOfBirth}
                  </p>
                )}
                {dateOfBirth && (
                  <p>
                    <span>Date Of Birth</span>
                    {formatDate(dateOfBirth)}
                  </p>
                )}
                {gender && (
                  <p>
                    <span>Gender</span>
                    {gender}
                  </p>
                )}
                {maritalStatus && (
                  <p>
                    <span>Marital Status</span>
                    {maritalStatus}
                  </p>
                )}
                {photo && <img src={photo} alt="Profile" />}

                <hr className="divider" />

                <div className="side-item">
                  <h6 className="side-title">Languages</h6>
                  {languages.map((item, index) => (
                    <div className="side-item-point" key={index}>
                      <span>{item.label}</span>
                      <div className="side-item-rating">
                        {Array.from({ length: item.level }).map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <hr className="divider" />

                <div className="side-item">
                  <h6 className="side-title">Hobbies</h6>
                  {hobbies.map((item, index) => (
                    <div className="side-item-point" key={index}>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                <hr className="divider" />

                <div className="side-item">
                  <h6 className="side-title">Social Links</h6>
                  {links.map((item, index) => (
                    <div className="side-item-point" key={index}>
                      <a href={item.link} target="_blank">
                        {item.link}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </td>
            <td colSpan={9} valign="top">
              {/* Detail Info */}
              <div className="detail-info">
                {summary && <p>{summary}</p>}

                <div className="temp-section">
                  <h6 className="temp-heading">Employment History</h6>
                  {professions.map((item, index) => (
                    <div key={index} className="temp-item">
                      <div className="temp-item-head">
                        <h5>
                          <b>{item.title}</b>
                          <span>
                            {formatDate(item.startDate)},{" "}
                            {formatDate(item.endDate)}
                          </span>
                        </h5>
                        <h6>
                          {item.employer}, {item.city}
                        </h6>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="temp-section">
                  <h6 className="temp-heading">Education History</h6>
                  {educations.map((item, index) => (
                    <div key={index} className="temp-item">
                      <div className="temp-item-head">
                        <h5>
                          <b>{item.degree}</b>
                          <span>
                            {formatDate(item.startDate)},{" "}
                            {formatDate(item.endDate)}
                          </span>
                        </h5>
                        <h6>
                          {item.school}, {item.city}
                        </h6>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="temp-section">
                  <h6 className="temp-heading">Courses History</h6>
                  {courses.map((item, index) => (
                    <div key={index} className="temp-item">
                      <div className="temp-item-head">
                        <h5>
                          <b>{item.title}</b>
                          <span>
                            {formatDate(item.startDate)},{" "}
                            {formatDate(item.endDate)}
                          </span>
                        </h5>
                        <h6>
                          {item.institute}, {item.city}
                        </h6>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* <div className="temp-section">
                  <h6 className="temp-heading">Internship History</h6>
                  {internships.map((item, index) => (
                    <div key={index} className="temp-item">
                      <div className="temp-item-head">
                        <h5>
                          <b>{item.title}</b>
                          <span>
                            {formatDate(item.startDate)},{" "}
                            {formatDate(item.endDate)}
                          </span>
                        </h5>
                        <h6>
                          {item.employer}, {item.city}
                        </h6>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div> */}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResumeDefaultTemplate;
