import imageMap from "../resumes/template-images";

const ResumeSelectTemplate = ({ templates }) => {
  return (
    <>
      <div className="resume-head">
        <h4 className="mt-5 heading">Select Template</h4>
        <p className="mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dolore
          reiciendis mollitia impedit et doloribus.
        </p>
      </div>

      <hr />

      <div className="resume-select-template">
        <ul className="grid grid-cols-3 gap-3">
          {templates.map((template, index) => (
            <li className="col" key={index}>
              <div className="template-card">
                <div className="action">
                  <button className="button">Select</button>
                </div>
                <div className="image">
                  <img
                    src={
                      imageMap[template.file.replace(".", "-").toLowerCase()]
                    }
                    alt={template.file}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ResumeSelectTemplate;
