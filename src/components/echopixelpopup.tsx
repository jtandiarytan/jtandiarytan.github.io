import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./popup.css";
// Define the prop types using an interface
interface PopupProps {
  show: boolean;
  onClose: () => void; // Specify that onClose is a function that returns nothing
}

// Use the interface to type the function component's props
const EchoPixelPopup: React.FC<PopupProps> = ({ show, onClose }) => {
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
            <h3>Software Developer and Tester Intern - True 3D Viewer</h3>
            <h3>May 2023 - July 2023</h3>
          </div>
          <div className="nameandgraduation">
            <h3>Echopixel, Inc. (www.echopixeltech.com)</h3>
          </div>
          <div className="description">
            <ul>
              <li>
                Incorporated internationalization and localization in
                Echopixel’s True 3D Viewer application in Qt C++ with Qt
                Linguist, adapting the surgical planning software to medical
                facilities in Japan.
              </li>
              <li>
                Automated the creation and update of Qt translation files by
                implementing new CMake build rules, increasing efficiency during
                the localization process to new languages.
              </li>
              <li>
                Built new Qt UI components to enable dynamic translation during
                runtime through user selected input.
              </li>
              <li>
                Conducted verification testing on the True 3D Viewer, ensuring
                the software adheres to medical standards and protocols.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EchoPixelPopup;
