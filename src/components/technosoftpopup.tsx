import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./popup.css";
// Define the prop types using an interface
interface PopupProps {
  show: boolean;
  onClose: () => void; // Specify that onClose is a function that returns nothing
}

// Use the interface to type the function component's props
const TechnosoftPopup: React.FC<PopupProps> = ({ show, onClose }) => {
  useEffect(() => {
    // When the popup is shown, we add the "no-scroll" class to the body
    if (show) {
      document.body.style.overflow = "hidden";
    }

    // When the popup is closed or the component is unmounted, we remove the "no-scroll" class
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  if (!show) {
    return null;
  }

  // Handler for overlay click
  const handleOverlayClick = () => {
    onClose();
  };

  // Prevents the click event from propagating to the overlay when content is clicked
  const handleContentClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-content" onClick={handleContentClick}>
        <div className="close-button">
          <AiOutlineCloseCircle size={30} onClick={onClose} />
        </div>
        <div className="wrapper">
          <div className="nameandgraduation">
            <h3>Software Engineer Intern – Research and Development Team</h3>
            <h3>June 2021 – August 2021</h3>
          </div>
          <div className="nameandgraduation">
            <h3>Technosoft Automotive (www.technosoftautomotive.com)</h3>
          </div>
          <div className="description">
            <ul>
              <li>
                Developed back-end XML queries to Dynamics 365 data services for
                Microsoft Dynamics 365 CRM.
              </li>
              <li>
                Embedded mobile applications in Microsoft Dynamics 365 CRM to
                manage, track and update new vehicles sales quotations data,
                providing a clear visualization of sales for Technosoft’s
                dealership partners.
              </li>
              <li>
                Implemented JavaScript client-side scripting to create custom
                business logic for data handling in the CRM client.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnosoftPopup;
