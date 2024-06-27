import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";

import templateMapper from "../../utils/templateMapper";

const TemplateRenderer = ({ templateId }) => {
  const [TemplateComponent, setTemplateComponent] = useState(null);

  useEffect(() => {
    const fetchTemplateData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/template/${templateId}`
        );

        const { file } = response.data.data;
        const Component = templateMapper[file];
        setTemplateComponent(() => Component);
      } catch (error) {
        console.error("Error fetching template data:", error);
      }
    };

    fetchTemplateData();
  }, [templateId]);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return TemplateComponent ? (
    <>
      <div ref={componentRef}>
        <TemplateComponent />
      </div>
      <button onClick={handlePrint}>Download as PDF</button>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default TemplateRenderer;
