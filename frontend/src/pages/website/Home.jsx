import { useState } from "react";
import Slider from "react-slick";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  HeroImg,
  TrustpilotImg,
  Feature01Img,
  Feature02Img,
  Feature03Img,
  Feature04Img,
  Feature05Img,
  Feature06Img,
  CTAImg,
  FAQImg,
} from "../../static/images/home";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  var carouselSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const data = [
    {
      title: "How much time do recruiters spend on my resume?",
      content:
        "Recruiters typically spend about 7 seconds initially scanning a resume to decide if it warrants further consideration.",
    },
    {
      title: "How long should my resume be?",
      content:
        "The ideal length for a resume is generally considered to be one page for most applicants. However, candidates with extensive experience may extend to two pages.",
    },
    {
      title: "What is a resume summary?",
      content:
        "A resume summary, also called a professional summary or summary statement, is a brief section at the top of your resume highlighting your experience, skills, and qualities. It helps you immediately showcase your strongest assets to potential employers.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section hero pb-0">
        <div className="container">
          <div className="text">
            <h5>Create Your Resume Online</h5>
            <h4>
              Stand out in 7 seconds. Navigate the 98% Applicant Tracking System
              hurdle. Join the top 2%.
            </h4>
            <p className="mb-8">
              Craft your perfect resume effortlessly with our professional
              field-tested resume templates designed to adhere to the exact
              'resume rules' employers seek. Create your winning resume in
              minutes <br /> - Get started now for free!
            </p>
            <Link to="/" className="button">
              Create My Resume
            </Link>
          </div>
          <div className="image">
            <img src={HeroImg} alt="Resume" />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section testimonial">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8 flex items-center">
              <div>
                <h4 className="title mb-3">Reviewed by the community.</h4>
                <h5 className="title-alt text-primary">
                  Trusted by professionals
                </h5>
              </div>
            </div>

            <div className="col-span-4">
              <div className="image">
                <img src={TrustpilotImg} alt="" />
              </div>
            </div>

            <div className="col-span-12">
              <div className="testimonial-carousel">
                <Slider {...carouselSettings}>
                  <div className="item">
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="text">
                      <h6>The only website I used.</h6>
                      <p>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the visual
                        form of a document or a typeface without relying on
                        meaningful content.
                      </p>
                      <span>xyz. About 10 Hours ago</span>
                    </div>
                  </div>

                  <div className="item">
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="text">
                      <h6>Pretty Good</h6>
                      <p>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the visual
                        form of a document or a typeface without relying on
                        meaningful content.
                      </p>
                      <span>abc. About 3 Hours ago</span>
                    </div>
                  </div>

                  <div className="item">
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="text">
                      <h6>Tediness to Tensionless</h6>
                      <p>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the visual
                        form of a document or a typeface without relying on
                        meaningful content.
                      </p>
                      <span>opq. About 6 Hours ago</span>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features bg-dark">
        <div className="container">
          <div className="text">
            <h4 className="title text-light mb-4">
              Achieving your dream job might feel tough.
            </h4>
            <p className="mb-10">
              But we're here to change that. Get ahead with the ultimate online
              resume maker: designed by experts, boosted by data, trusted by
              millions of pros.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 mb-10">
            <div>
              <div className="item">
                <div className="icon">
                  <img src={Feature01Img} alt="" />
                  <h6>
                    Craft Your Path <br /> to Success
                  </h6>
                </div>
                <div className="content">
                  <p>
                    Create a standout resume that gets you noticed and lands you
                    your dream job effortlessly.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item">
                <div className="icon">
                  <img src={Feature02Img} alt="" />
                  <h6>
                    Resume <br /> Building
                  </h6>
                </div>
                <div className="content">
                  <p>
                    Build your perfect resume in minutes, right from your web
                    browser. No downloads, just easy editing.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item">
                <div className="icon">
                  <img src={Feature03Img} alt="" />
                  <h6>
                    Error-Free <br /> Brilliance
                  </h6>
                </div>
                <div className="content">
                  <p>
                    Ensure your resume shines with our automated grammar and
                    spell-checker, guaranteeing a flawless presentation.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item">
                <div className="icon">
                  <img src={Feature04Img} alt="" />
                  <h6>
                    Your Privacy <br /> Matters
                  </h6>
                </div>
                <div className="content">
                  <p>
                    Your data is safeguarded with military-grade 256-bit
                    encryption, ensuring utmost privacy and security.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item">
                <div className="icon">
                  <img src={Feature05Img} alt="" />
                  <h6>
                    Instant <br /> Impact
                  </h6>
                </div>
                <div className="content">
                  <p>
                    Instantly create powerful resume profiles or captivating
                    cover letters with our one-click summary generator. Overcome
                    writer's block with ease!
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item">
                <div className="icon">
                  <img src={Feature06Img} alt="" />
                  <h6>
                    Professional <br /> Templates
                  </h6>
                </div>
                <div className="content">
                  <p>
                    Choose from a collection of professionally designed resume
                    templates and examples for quick customization and download.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/" className="button">
              Create My Resume
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="image">
          <img src={CTAImg} alt="" />
        </div>
        <div className="container">
          <div className="text">
            <h4 className="title mb-4">
              Master this to nail your initial interview or leave a lasting
              impact.
            </h4>
            <p className="mb-8">
              Securing your dream job is no longer impossible. Gain a real
              advantage with the premier online resume maker: crafted by
              experts, bolstered by data, and relied upon by countless
              professionals.
            </p>
            <Link to="/" className="button">
              Create My Resume
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq" id="faq">
        <div className="container">
          <div className="grid grid-cols-2">
            <div>
              <div className="text">
                <h5 className="title mb-4">Frequently Asked Questions</h5>
                <p className="mb-8">
                  Common questions customers have and is useful to customers at
                  all stages of the customer journey. FAQs start with a question
                  and then answer it concisely.
                </p>
                <div className="accordion">
                  {data.map((item, index) => (
                    <div key={index} className="accordion-item">
                      <div
                        className={`accordion-title ${
                          activeIndex === index ? "active" : ""
                        }`}
                        onClick={() => handleToggle(index)}
                      >
                        <span>{item.title}</span>
                        {activeIndex === index ? <FaMinus /> : <FaPlus />}
                      </div>
                      <div
                        className={`accordion-content ${
                          activeIndex === index ? "show" : ""
                        }`}
                      >
                        <p>{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image">
          <Link to="/" className="button">
            Create My Resume
          </Link>
          <img src={FAQImg} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
