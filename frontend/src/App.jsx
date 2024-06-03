import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { fetchUserData } from "./utils/fetchUserData";
import { login, setLoading } from "./store/slices/authSlice";
import {
  Website,
  Dashboard as DashboardLayout,
  Resume,
  Authentication,
} from "./layouts/index";
import { Home } from "./pages/website/index";
import {
  Register,
  Login,
  ForgotPassword,
  ChangePassword,
} from "./pages/authentication/index";
import {
  Dashboard,
  Profile,
  UpdateAvatar,
  UpdateDetails,
} from "./pages/dashboard/index";
import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    const initializeUser = async () => {
      const userData = await fetchUserData();
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
    };

    initializeUser();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Website />}>
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/" element={<Authentication />}>
            <Route
              path="register"
              element={isAuthenticated ? <Navigate to="/" /> : <Register />}
            />
            <Route
              path="login"
              element={isAuthenticated ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="login"
              element={isAuthenticated ? <Navigate to="/" /> : <Login />}
            />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route
              path="change-password"
              element={
                <ProtectedRoute>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route
              path=""
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              <Route path="update-avatar" element={<UpdateAvatar />} />
              <Route path="update-details" element={<UpdateDetails />} />
            </Route>
          </Route>
          <Route
            path="/resumes"
            element={
              <ProtectedRoute>
                <Resume />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
