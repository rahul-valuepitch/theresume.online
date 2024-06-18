import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ResumeOutput = () => {
  const navigate = useNavigate();
  const resume = useSelector((state) => state.resume);

  useEffect(() => {
    if (!resume) {
      navigate("/dashboard");
    }
  }, [resume, navigate]);

  if (!resume) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Resume</h1>
      <p>Template ID: {resume.detail.templateId}</p>
      <p>Resume ID: {resume.detail.resumeId}</p>
      <p>User ID: {resume.detail.user}</p>
      <table>
        <tbody>
          <tr>
            <th>Job Title</th>
            <td>{resume.personalDetail.jobTitle}</td>
          </tr>
          <tr>
            <th>First Name</th>
            <td>{resume.personalDetail.firstName}</td>
          </tr>
          <tr>
            <th>Middle Name</th>
            <td>{resume.personalDetail.middleName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{resume.personalDetail.lastName}</td>
          </tr>
          <tr>
            <th>Email Id.</th>
            <td>{resume.personalDetail.email}</td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>{resume.personalDetail.phone}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{resume.personalDetail.address}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>{resume.personalDetail.city}</td>
          </tr>
          <tr>
            <th>State</th>
            <td>{resume.personalDetail.state}</td>
          </tr>
          <tr>
            <th>Zip Code</th>
            <td>{resume.personalDetail.zip}</td>
          </tr>
          <tr>
            <th>Driving License</th>
            <td>{resume.personalDetail.drivingLicense}</td>
          </tr>
          <tr>
            <th>Nationality</th>
            <td>{resume.personalDetail.nationality}</td>
          </tr>
          <tr>
            <th>Place Of Birth</th>
            <td>{resume.personalDetail.placeOfBirth}</td>
          </tr>
          <tr>
            <th>Date Of Birth</th>
            <td>{resume.personalDetail.dateOfBirth}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{resume.personalDetail.gender}</td>
          </tr>
          <tr>
            <th>Marital Status</th>
            <td>{resume.personalDetail.maritalStatus}</td>
          </tr>
          <tr>
            <th>Summary</th>
            <td>{resume.personalDetail.summary}</td>
          </tr>
          <tr>
            <th>Experience</th>
            <td>
              {resume.professions.map((profession) => (
                <div key={profession._id}>
                  <hr />
                  <b>
                    {profession.title} - {profession.employer}
                  </b>
                  <p>
                    {profession.startDate} - {profession.endDate}
                  </p>
                  <p>{profession.description}</p>
                  <hr />
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ResumeOutput;
