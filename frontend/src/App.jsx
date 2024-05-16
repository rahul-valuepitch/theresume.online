import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Website, Dashboard, Resume, Authentication } from "./layouts/index";
import { Home } from "./pages/website/index";
import { Register, Login, ForgotPassword } from "./pages/authentication/index";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Website />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/" element={<Authentication />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
