import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Breadcrumb } from "../../../../components";
import BlogPostList from "../blog-post-list";
import {
  Post04Cover,
  Post01CoverLetter,
  CreateResumeBtn,
} from "../../../../static/images/blog";

const Post04 = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      {/* Breadcruumb */}
      <Breadcrumb />

      {/* Post Section */}
      <section className="section post-detail">
        <div className="container">
          <div className="grid">
            <div className="grid grid-cols-10 gap-10">
              <div className="col-span-2">
                <Link
                  to={isAuthenticated ? "/templates" : "/login"}
                  className="side-btn"
                >
                  <img src={CreateResumeBtn} alt="" />
                </Link>
              </div>

              <div className="col-span-6">
                <h1 className="heading text-primary mb-7">
                  The Best Questions To Ask in a Job Interview
                </h1>
                <img
                  src={Post04Cover}
                  alt="The Best Questions To Ask in a Job Interview"
                  className="rounded-xl"
                />

                <h2 className="heading text-primary mb-7">
                  Top Questions to Ask During a Job Interview: Insights for
                  Success
                </h2>
                <p className="mt-5 mb-5">
                  When you're in an interview, it's a good idea to ask about the
                  company's work environment and what they aim to achieve. This
                  can show that you care about the company's success and give
                  the interviewer a chance to share their personal views. It can
                  also help you better understand the job and the company. Here
                  are some questions you might consider asking at the end of the
                  interview:
                </p>

                <h5 className="sub-heading mb-3">
                  1. Questions About the Role and Responsibilities
                </h5>
                <ul className="mb-5">
                  <li>
                    Can you describe a typical day or week in this position?
                  </li>
                  <li>
                    What are the key objectives or priorities for this role in
                    the first six months?
                  </li>
                  <li>
                    How does this role contribute to the overall goals and
                    success of the team or organization?
                  </li>
                </ul>
                <p className="mb-5">
                  Asking about the specifics of the role shows your interest in
                  understanding what will be expected of you and how you can
                  contribute effectively.
                </p>

                <h5 className="sub-heading mb-3"></h5>
                <p className="mb-5"></p>

                <h5 className="sub-heading mb-3"></h5>
                <p className="mb-5"></p>

                <h5 className="sub-heading mb-3"></h5>
                <p className="mb-5"></p>

                <h5 className="sub-heading mb-3"></h5>
                <p className="mb-5"></p>

                <h5 className="sub-heading mb-3"></h5>
                <p className="mb-5"></p>
              </div>

              <div className="col-span-2">
                <aside className="blog-sidebar">
                  <h4 className="mb-5">Related Post</h4>
                  <ul>
                    {BlogPostList.map((post) => (
                      <li key={post.id}>
                        <Link to={`/blog${post.url}`}>
                          <img src={post.link} alt={post.name} />
                          <h6>{post.name}</h6>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post04;
