import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BinusLogo from "./../images/BinusLogo.png";
import UIUCLogo from "./../images/UIUCLogo.png";
import "../styling/education.css";

function Education() {
  return (
    <div className="container-education">
      <div className="wrapper">
        <div className="title-education">
          <h2>Education</h2>
        </div>
        <div className="education-content">
          <a
            href="https://cs.illinois.edu/academics/undergraduate/degree-program-options/bs-mathematics-computer-science"
            target="_blank"
          >
            <div className="education-entry">
              <div className="education-image">
                <img src={UIUCLogo}></img>
              </div>
              <div className="education-date">Aug 2019 - Dec 2023</div>
              <div className="education-data">
                <div className="education-data-title">
                  <p>
                    University of Illinois Urbana-Champaign · B.S. in
                    Mathematics and Computer Science
                  </p>
                </div>
                <div className="education-data-description">
                  <p>GPA 3.72/4.0</p>
                  <p>
                    Coursework Taken: Artificial Intelligence, Applied Machine
                    Learning, Algorithms, Systems Programming, Programming
                    Languages and Compilers, Computer Architecture, Data
                    Structures, Linear Algebra, Numerical Analysis, Graph Theory
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://simprug.binus.sch.id/" target="_blank">
            <div className="education-entry">
              <div className="education-image">
                <img src={BinusLogo}></img>
              </div>
              <div className="education-date">Aug 2019 - Dec 2023</div>
              <div className="education-data">
                <div className="education-data-title">
                  <p>
                    Binus School Simprug, Jakarta, Indonesia · H.S.
                    International Baccalaurette Curriculum
                  </p>
                </div>
                <div className="education-data-description">
                  <p>IB: 42/45</p>
                  <p>
                    Coursework Taken: Mathematics HL, Physics HL, Bahasa
                    Indonesia HL, English SL, Business and Management SL,
                    Chemistry SL
                  </p>
                  <p>HL: Higher Level, SL: Standard Level</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
