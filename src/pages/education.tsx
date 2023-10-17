import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styling/education.css';

function Education() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container-education">
      <div className="wrapper" ><div className="title" ><h2>Education</h2></div></div>
      {/* <div className="wrapper">
      <button onClick={() => setIsOpen(true)}>
        Open Pop-up
      </button>
        {isOpen && (
        <div>
          <div>
            This is the content of the pop-up.
          </div>
          <button onClick={() => setIsOpen(false)}>
            Close Pop-up
          </button>
        </div>
        )}
      </div> */}
      <div className="wrapper">
            <div className = "nameandgraduation">
              <h3>University of Illinois, Urbana-Champaign</h3>
              <h3>August 2019 - December 2023</h3>
            </div>
            <div className = "nameandgraduation">
              <h3>Bachelor of Science in Mathematics and Computer Science</h3>
              <h3>GPA 3.71/4.0</h3>
            </div>
            <div className = "courses">
              <p>Coursework Taken: Artificial Intelligence, Applied Machine Learning, Algorithms, Systems Programming, Programming Languages and Compilers, Computer Architecture, Data Structures, Linear Algebra, Numerical Analysis, Graph Theory</p>
            </div>
        </div>
        <div className="wrapper">
            <div className = "nameandgraduation">
              <h3>Binus School Simprug, Jakarta, Indonesia</h3>
              <h3>August 2019 - December 2023</h3>
            </div>
            <div className = "nameandgraduation">
              <h3>International Baccalaureate Curriculum</h3>
              <h3>42/45</h3>
            </div>
            <div className = "courses">
              <p>Coursework Taken: Mathematics HL, Physics HL, Bahasa Indonesia HL, English SL, Business and Management SL, Chemistry SL</p>
            </div>
        </div>
    </div>
  );
}

export default Education;