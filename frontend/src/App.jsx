import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { login, setLoading } from "./store/slices/authSlice";
import { hideAlert } from "./store/slices/alertSlice";
import {
  AuthenticationLayout,
  ResumeLayout,
  DashboardLayout,
  WebsiteLayout,
} from "./layouts/index";
import { Alert } from "./components/index";
import { Register, Login, ForgotPassword } from "./pages/authentication/index";
import {
  Dashboard,
  Profile,
  Resume,
  UpdateProfileDetails,
} from "./pages/dashboard/index";
import { Home } from "./pages/website/index";
import { ResumePage } from "./pages/resumes/index";
import { ProtectedRoute, FetchUserData } from "./utils/index";

const App = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const alert = useSelector((state) => state.alert);

  // Close Alert Handler
  const handleCloseAlert = () => {
    dispatch(hideAlert());
  };

  // Get User data
  useEffect(() => {
    const initializeUser = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        const userData = await FetchUserData();
        if (userData) {
          dispatch(
            login({
              isAuthenticated: true,
              loading: false,
              user: userData,
              error: null,
            })
          );
        } else {
          dispatch(setLoading(false));
        }
      } else {
        dispatch(setLoading(false));
      }
    };

    initializeUser();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {alert.visible && (
        <Alert
          className={`alert-${alert.type}`}
          message={alert.message}
          onClose={handleCloseAlert}
        />
      )}

      <Router>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/" element={<AuthenticationLayout />}>
            <Route
              path="/register"
              element={
                isAuthenticated ? <Navigate to="/dashboard" /> : <Register />
              }
            />
            <Route
              path="/login"
              element={
                isAuthenticated ? <Navigate to="/dashboard" /> : <Login />
              }
            />
            <Route
              path="/forgot-password"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <ForgotPassword />
                )
              }
            />
          </Route>

          {/* Website Routes */}
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home />} />
          </Route>

          {/* Resume Routes */}
          <Route
            path="/resumes"
            element={
              <ProtectedRoute>
                <ResumeLayout />
              </ProtectedRoute>
            }
          >
            <Route
              path="create/:_id"
              element={
                <ProtectedRoute>
                  <ResumePage />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              <Route path="update-details" element={<UpdateProfileDetails />} />
            </Route>
            <Route
              path="resumes"
              element={
                <ProtectedRoute>
                  <Resume />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
