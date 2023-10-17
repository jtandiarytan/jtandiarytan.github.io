import React from 'react';
import '../styling/experience.css';

function Experience() {
  return (
    <div className="container-content">
        <div className="wrapper"><div className="title"><h2>Professional Experience</h2></div></div>
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
                        Incorporated internationalization and localization in Echopixel’s True 3D Viewer application in Qt C++ with Qt
Linguist, adapting the surgical planning software to medical facilities in Japan.
                    </li>
                    <li>
                        Automated the creation and update of Qt translation files by implementing new CMake build rules, increasing efficiency
    during the localization process to new languages.
                    </li>
                    <li>
                        Built new Qt UI components to enable dynamic translation during runtime through user selected input.
                    </li>
                    <li>
                        Conducted verification testing on the True 3D Viewer, ensuring the software adheres to medical standards and protocols. 
                    </li>
                </ul>
            </div>
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
                        Reengineered Blibli’s web performance testing using NodeJS to enable automated testing through integration into
Jenkins CI/CD, increasing efficiency and effectiveness in testing Blibli.com before deployment.
                    </li>
                    <li>
                        Utilized parallel computing to divide multiple web performance tests among concurrent child processes, boosting
consistency of test results and reducing execution time
                    </li>
                    <li>
                        Implemented unit testing in product development phase with JEST.io and SonarQube.
                    </li>
                </ul>
            </div>
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
                        Built RESTful API’s in C# .NET for Yana E-Commerce, allowing for customer, order and product data transfer between
the front-end client to back-end server and Microsoft Azure Cosmos DB. 
                    </li>
                    <li>
                        Utilized Next.js, React and TailwindCSS in the frontend to implement E-Commerce web application UI/UX in
collaboration with design and product team.
                    </li>
                    <li>
                        Consolidated state update logic within and between distant components using React hooks and Jotai atom, allowing for
relationships between React components.
                    </li>
                </ul>
            </div>
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
                    Developed back-end XML queries to Dynamics 365 data services for Microsoft Dynamics 365 CRM.
                    </li>
                    <li>
                    Embedded mobile applications in Microsoft Dynamics 365 CRM to manage, track and update new vehicles sales
quotations data, providing a clear visualization of sales for Technosoft’s dealership partners. 
                    </li>
                    <li>
                    Implemented JavaScript client-side scripting to create custom business logic for data handling in the CRM client.
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Experience;