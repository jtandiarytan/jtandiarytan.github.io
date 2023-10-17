import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styling/education.css';

function Education() {
  return (
    <div className="container-education">
      <div className="wrapper" ><div className="title" ><h2>Education</h2></div></div>
      
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
              <p>Coursework Taken: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
              <p>Coursework Taken: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
  );
}

export default Education;