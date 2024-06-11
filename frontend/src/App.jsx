import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  AuthenticationLayout,
  ResumeLayout,
  DashboardLayout,
  WebsiteLayout,
} from "./layouts/index";
import { Register, Login, ForgotPassword } from "./pages/authentication/index";
import { Dashboard, Profile, Resume } from "./pages/dashboard/index";
import { Home } from "./pages/website/index";
import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const alert = useSelector((state) => state.alert);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
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
          ></Route>

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
            />
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
