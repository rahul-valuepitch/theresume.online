import { Breadcrumb } from "../../components";
import { AboutImg } from "../../static/images/about";

const About = () => {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* About Page Us */}
      <section className="section about">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="col-span-2">
              <h5 className="title mb-4">
                Unleash Your Career Potential with TheResume!
              </h5>
              <p className="mb-8">
                Welcome to TheResume, where we specialize in transforming your
                career aspirations into compelling resumes that stand out. At
                TheResume, we understand that your resume is more than just a
                document; it's your professional story, your gateway to new
                opportunities.
              </p>
              <h6 className="title-alt mb-3">
                Ready to ditch the resume blues and land your dream job?
              </h6>
              <p className="mb-8">
                <b>TheResume</b> is here to turn your career aspirations into
                resume magic that gets you noticed!
              </p>
              <h6 className="title-alt mb-3">
                We don't just help write resumes, we craft powerful career
                stories.
              </h6>
              <p className="mb-8">
                Your resume is your <b>golden ticket</b> to new opportunities,
                and we'll make sure it shines brighter than the competition.
              </p>
            </div>

            <div className="col flex items-center">
              <div className="image">
                <img src={AboutImg} alt="" />
              </div>
            </div>

            <div className="col flex items-center">
              <div className="text">
                <h5 className="title-alt mb-8">Why Choose TheResume?</h5>
                <ul>
                  <li>
                    <b>Stand Out From the Crowd:</b>
                    <span>
                      Our expert resume writers are resume rockstars! They'll
                      tailor your resume to showcase your unique awesomeness and
                      achievements, making you an irresistible candidate.
                    </span>
                  </li>
                  <li>
                    <b>Personalized for You:</b>
                    <span>
                      Every career journey is one-of-a-kind. Whether you're a
                      seasoned pro ready to conquer the next level or a fresh
                      graduate embarking on your professional odyssey, we'll
                      work closely with you to craft a resume that screams
                      success.
                    </span>
                  </li>
                  <li>
                    <b>Expertise You Can Trust:</b>
                    <span>
                      We're resume ninjas with years of experience and a finger
                      on the pulse of the latest hiring trends. Your resume will
                      be a masterpiece that grabs the attention of recruiters
                      and hiring managers.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-2">
              <h5 className="title-alt mb-4">Your Success is Our Passion!</h5>
              <p className="mb-8">
                At TheResume, we're obsessed with your success. We don't settle
                for "good enough" - we create resumes that{" "}
                <b>exceed your expectations</b> and open doors to exciting
                possibilities.
              </p>

              <h5 className="title-alt mb-4">
                Ready to Launch Your Career Takeoff?
              </h5>
              <p className="mb-8">
                Let TheResume be your co-pilot! We'll craft a resume that gets
                you noticed and positions you for the success you deserve. Join
                countless others who have transformed their careers with
                TheResume!
              </p>

              <h5 className="title-alt mb-4">
                Craft Your Dream Job. Build Your Future. It Starts Here.
              </h5>
              <p className="sub-heading">
                Don't wait! Transform your career trajectory today with
                TheResume - where your professional journey takes flight!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
