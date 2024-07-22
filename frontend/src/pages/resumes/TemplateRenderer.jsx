import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import templateMapper from "../../utils/templateMapper";
import useRefresh from "../../utils/useRefresh";

const TemplateRenderer = ({ templateId, resume }) => {
  const refresh = useRefresh();
  const [TemplateComponent, setTemplateComponent] = useState(null);
  const [currentStyleSheetUrl, setCurrentStyleSheetUrl] = useState(null);

  const componentRef = useRef();

  useEffect(() => {
    const fetchTemplateData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/template/${templateId}`
        );

        const { file } = response.data.data;
        const Component = templateMapper[file];

        // Dynamically load the new CSS
        const cssModules = import.meta.glob("./templates/**/style.css");

        // Remove all previously added stylesheet links
        const previousLinks = document.querySelectorAll(
          "link[data-dynamic-style]"
        );
        previousLinks.forEach((link) => document.head.removeChild(link));

        // Loop through the keys (template names) in cssModules
        for (const key in cssModules) {
          if (cssModules.hasOwnProperty(key)) {
            // Extract the template name from the key
            const regex = /\.\/templates\/(.*)\/style\.css$/;
            const match = key.match(regex);

            if (match && match[1] === file) {
              const newStyleSheetModule = await cssModules[key]();
              const newStyleSheetUrl = newStyleSheetModule.default;

              // Create a new link element
              const newLinkElement = document.createElement("link");
              newLinkElement.rel = "stylesheet";
              newLinkElement.href = newStyleSheetUrl;
              newLinkElement.setAttribute("data-dynamic-style", true); // Mark this link as dynamically added

              // Append the new link element to the document head
              document.head.appendChild(newLinkElement);

              // Update the current style sheet URL state
              setCurrentStyleSheetUrl(newStyleSheetUrl);

              // Update the template component
              setTemplateComponent(() => Component);
              break; // Exit loop once matched and processed
            }
          }
        }
      } catch (error) {
        console.error("Error fetching template data:", error);
      }
    };

    fetchTemplateData();

    // Cleanup function to remove the current stylesheet link
    return () => {
      if (currentStyleSheetUrl) {
        const linkToRemove = document.querySelector(
          `link[href="${currentStyleSheetUrl}"][data-dynamic-style]`
        );
        if (linkToRemove) {
          document.head.removeChild(linkToRemove);
        }
        setCurrentStyleSheetUrl(null); // Clear currentStyleSheetUrl state
        refresh();
      }
    };
  }, [templateId, currentStyleSheetUrl, refresh]);

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
