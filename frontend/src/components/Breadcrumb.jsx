import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const titleMapping = {
    "/": "Home",
    "/about": "About",
    "/dashboard": "Dashboard",
    "/dashboard/profile": "Profile",
    "/dashboard/resume": "Resumes",
  };

  const pageTitle = titleMapping[`/${pathnames.join("/")}`] || "Page";

  return (
    <div className="breadcrumb">
      <div className="container">
        <div className="inner">
          <h1 className="breadcrumb-title">{pageTitle}</h1>
          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <Link to="/">
                <GoHome />
              </Link>
            </li>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              return (
                <li key={to} className="breadcrumb-item">
                  <Link to={to}>{value}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
