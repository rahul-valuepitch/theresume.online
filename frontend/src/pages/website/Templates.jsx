import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Breadcrumb } from "../../components";
import { showAlert } from "../../store/slices/alertSlice";

const Templates = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);

  const fetchTemplates = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      dispatch(
        showAlert({ message: "Unauthorized: No token found", type: "error" })
      );
      return;
    }

    // Fetch Templates
  };

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb />

      <h1>Templates</h1>
    </>
  );
};

export default Templates;
