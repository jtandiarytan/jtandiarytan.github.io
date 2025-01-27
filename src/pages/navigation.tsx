import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styling/navigation.css";

function Navigation() {
  return (
    <div className="container-navigation">
      <div className="about">
        <div className="navigation">
          <ul className="nav">
            <li>
              <a href="#About">About</a>
            </li>
            <p>•</p>
            <li>
              <a href="#Experience">Experience</a>
            </li>
            <p>•</p>
            <li>
              <a href="#Education">Education</a>
            </li>
            <p>•</p>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <p>•</p>
            <li>
              <a href="#Skills">Skills</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
