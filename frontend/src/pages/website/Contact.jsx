import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import { useFormik } from "formik";

import { Breadcrumb, FormInput, FormText } from "../../components";
import { ContactBannerImg } from "../../static/images/contact";
import { contactPageSchema } from "../../schemas/index";

const Contact = () => {
  // Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: contactPageSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log("Form Submitted:", values); // Log to check form submission
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/contact`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Response:", response); // Log to check the response
        // Optionally reset the form or show a success message
        resetForm();
      } catch (error) {
        console.error("Error submitting contact form:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const { values, handleChange, handleSubmit, isSubmitting, errors, touched } =
    formik;

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Contact Section */}
      <section className="section contact">
        <div className="container">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-5">
              <div className="image">
                <img src={ContactBannerImg} alt="Contact Image" />
              </div>
            </div>
            <div className="col-span-7">
              <h2 className="title mb-3">Contact Us</h2>
              <h3 className="title-alt mb-8">Let's Talk</h3>
              <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
                <div className="col-span-2">
                  <FormInput
                    label="Full Name"
                    name="name"
                    type="text"
                    className="mb-0"
                    required
                    value={values.name}
                    onChange={handleChange}
                    error={touched.name && errors.name ? errors.name : null}
                  />
                  {touched.name && errors.name && (
                    <div className="error">{errors.name}</div>
                  )}
                </div>
                <div className="col">
                  <FormInput
                    label="Email Id."
                    name="email"
                    type="email"
                    className="mb-0"
                    required
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && errors.email ? errors.email : null}
                  />
                  {touched.email && errors.email && (
                    <div className="error">{errors.email}</div>
                  )}
                </div>
                <div className="col">
                  <FormInput
                    label="Phone No."
                    name="phone"
                    type="text"
                    className="mb-0"
                    required
                    value={values.phone}
                    onChange={handleChange}
                    error={touched.phone && errors.phone ? errors.phone : null}
                  />
                  {touched.phone && errors.phone && (
                    <div className="error">{errors.phone}</div>
                  )}
                </div>
                <div className="col-span-2">
                  <FormText
                    label="Message"
                    name="message"
                    rows="4"
                    className="mb-0"
                    required
                    value={values.message}
                    onChange={handleChange}
                    error={
                      touched.message && errors.message ? errors.message : null
                    }
                  />
                  {touched.message && errors.message && (
                    <div className="error">{errors.message}</div>
                  )}
                </div>
                <div className="col-span-2">
                  <button
                    className="button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Send Message
                  </button>
                </div>
              </form>

              <h3 className="title-alt mt-8 mb-8">Connect with us</h3>
              <div className="links">
                <Link to="tel:9768828078" className="link">
                  <MdOutlinePhone />
                  <span>+91 97688 28078</span>
                </Link>
                <Link to="mailto:theresumes.online@gmail.com" className="link">
                  <MdOutlineMailOutline />
                  <span>theresumes.online@gmail.com</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
