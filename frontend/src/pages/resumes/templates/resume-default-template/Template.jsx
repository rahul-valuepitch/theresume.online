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

  const fullName = `${resume.personalDetail.firstName} ${resume.personalDetail.middleName} ${resume.personalDetail.lastName}`;
  const addressDetails = [
    resume.personalDetail.address,
    resume.personalDetail.city,
    resume.personalDetail.state,
    resume.personalDetail.zip,
  ]
    .filter((detail) => detail)
    .join(", ");

  return (
    <div className="temp-content">
      <h1>{fullName}</h1>
      <h2>{resume.personalDetail.jobTitle}</h2>
      <hr className="divider" />
      <table className="info-container">
        <tbody>
          <tr>
            <td colSpan={3} valign="top">
              <div className="contact-info">
                {email && (
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                )}
                {phone && <p>{phone}</p>}
                <br />
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
              </div>
            </td>
            <td colSpan={9} valign="top">
              <div className="detail-info">
                {summary && <p>{summary}</p>}
                <br />
                <h6 className="temp-heading">Education</h6>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResumeDefaultTemplate;
