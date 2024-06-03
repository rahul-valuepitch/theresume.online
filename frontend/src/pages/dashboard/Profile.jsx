import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { GoPencil } from "react-icons/go";
import { useSelector } from "react-redux";

import { Modal } from "../../components";
import { DummyUser } from "../../static/images/users";

const Profile = () => {
  const auth = useSelector((state) => state.auth.user);

  const location = useLocation();
  const navigate = useNavigate();

  const isAvatarModalOpen = location.pathname.includes(
    "/dashboard/profile/update-avatar"
  );
  const isDetailsModalOpen = location.pathname.includes(
    "/dashboard/profile/update-details"
  );

  const handleCloseModal = () => {
    navigate("/dashboard/profile");
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-1">
          <div className="profile-card card">
            <div className="card-body">
              <div className="image">
                {auth.avatar && <img src={auth.avatar} alt={auth.fullName} />}
                {!auth.avatar && <img src={DummyUser} alt={auth.fullName} />}
                <Link
                  to="/dashboard/profile/update-avatar"
                  className="upload-avatar-btn"
                >
                  <GoPencil />
                </Link>
              </div>
              <div className="text">
                <h5>{auth.fullName}</h5>
                <h6>{auth.email}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="profile-detail card">
            <div className="card-head">
              <h5>Basic Information</h5>
              <Link
                to="/dashboard/profile/update-details"
                className="upload-profile-btn"
              >
                <GoPencil />
                <span>Edit</span>
              </Link>
            </div>
            <div className="card-body">
              <table>
                <tbody>
                  <tr>
                    <th>Full Name</th>
                    <td>{auth.fullName}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{auth.email}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{auth.phone}</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>{auth.gender}</td>
                  </tr>
                  <tr>
                    <th>Birth Date</th>
                    <td>
                      {new Date(auth.birthDate)
                        .toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                        .replace(/ /g, " ")}
                    </td>
                  </tr>
                  <tr>
                    <th>Pronounce</th>
                    <td>{auth.pronounce}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={isAvatarModalOpen || isDetailsModalOpen}
        onClose={handleCloseModal}
      >
        <Outlet />
      </Modal>
    </>
  );
};

export default Profile;
