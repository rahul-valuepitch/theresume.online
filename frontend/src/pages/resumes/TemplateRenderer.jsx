import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";

import templateMapper from "../../utils/templateMapper";
import { chunkContent } from "../../utils/resumeChunk";

const TemplateRenderer = ({ templateId, resume }) => {
  const [TemplateComponent, setTemplateComponent] = useState(null);

  const contentChunks = chunkContent(resumeContent);

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
    <div className="print-container">
      <main>
        <div className="print-content" ref={componentRef}>
          <TemplateComponent resume={resume} />
        </div>
      </main>
      <button onClick={handlePrint} className="button download-temp-btn">
        Download as PDF
      </button>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default TemplateRenderer;
