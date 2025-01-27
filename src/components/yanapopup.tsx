import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./popup.css";
// Define the prop types using an interface
interface PopupProps {
  show: boolean;
  onClose: () => void; // Specify that onClose is a function that returns nothing
}

// Use the interface to type the function component's props
const YanaPopup: React.FC<PopupProps> = ({ show, onClose }) => {
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
            <h3>Software Engineer Intern – Yana E-Commerce</h3>
            <h3>May 2022 – June 2022</h3>
          </div>
          <div className="nameandgraduation">
            <h3>Technosoft Automotive (www.technosoftautomotive.com)</h3>
          </div>
          <div className="description">
            <ul>
              <li>
                Built RESTful API’s in C# .NET for Yana E-Commerce, allowing for
                customer, order and product data transfer between the front-end
                client to back-end server and Microsoft Azure Cosmos DB.
              </li>
              <li>
                Utilized Next.js, React and TailwindCSS in the frontend to
                implement E-Commerce web application UI/UX in collaboration with
                design and product team.
              </li>
              <li>
                Consolidated state update logic within and between distant
                components using React hooks and Jotai atom, allowing for
                relationships between React components.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YanaPopup;
