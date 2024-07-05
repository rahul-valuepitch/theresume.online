import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Breadcrumb } from "../../components";
import { showAlert } from "../../store/slices/alertSlice";
import { setTemplates } from "../../store/slices/templateSlice";
import imageMap from "../resumes/template-images";

const Templates = () => {
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.template.templates);

  const fetchTemplates = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      dispatch(
        showAlert({ message: "Unauthorized: No token found", type: "error" })
      );
      return;
    }

    // Fetch Templates
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/template`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    console.log(response);

    const data = response.data.data;

    dispatch(setTemplates(data));
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Template Section */}
      <section className="section template-list">
        <div className="container">
          <div className="text-center">
            <h4 className="heading text-primary mb-6">
              Create Your Perfect Resume Effortlessly!
            </h4>
            <p className="sub-heading">
              With our Online resume builder, craft a professional and polished
              resume easily. <br /> Ideal for the efficient job seeker who
              values simplicity and professionalism.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {templates.map((template, index) => (
              <div className="col" key={index}>
                <div className="template-card">
                  <div className="action">
                    <button className="button">Use This Template</button>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Templates;
