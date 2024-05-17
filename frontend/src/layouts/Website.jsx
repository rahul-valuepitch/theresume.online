import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const Website = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Website;
