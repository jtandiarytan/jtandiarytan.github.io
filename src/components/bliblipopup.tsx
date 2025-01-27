import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./popup.css";
// Define the prop types using an interface
interface PopupProps {
  show: boolean;
  onClose: () => void; // Specify that onClose is a function that returns nothing
}

// Use the interface to type the function component's props
const BlibliPopup: React.FC<PopupProps> = ({ show, onClose }) => {
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
            <h3>Software Engineer Intern – RnD Squad</h3>
            <h3>July 2022 – August 2022</h3>
          </div>
          <div className="nameandgraduation">
            <h3>Blibli PT Global Digital Niaga (www.blibli.com) </h3>
          </div>
          <div className="description">
            <ul>
              <li>
                Reengineered Blibli’s web performance testing using NodeJS to
                enable automated testing through integration into Jenkins CI/CD,
                increasing efficiency and effectiveness in testing Blibli.com
                before deployment.
              </li>
              <li>
                Utilized parallel computing to divide multiple web performance
                tests among concurrent child processes, boosting consistency of
                test results and reducing execution time
              </li>
              <li>
                Implemented unit testing in product development phase with
                JEST.io and SonarQube.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlibliPopup;
