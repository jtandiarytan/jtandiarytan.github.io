import React, { useState } from "react";
import EchoPixelPopup from "../components/echopixelpopup";
import echopixelImage from "./../images/echopixelImage.jpg";
import blibliImage from "./../images/blibliImage.jpg";
import yanaImage from "./../images/YanaImage.png";
import technosoftImage from "./../images/technosoftImage.png";
import "../styling/experience.css";
import BlibliPopup from "../components/bliblipopup";
import YanaPopup from "../components/yanapopup";
import TechnosoftPopup from "../components/technosoftpopup";

function Experience() {
  return (
    <div className="container-experience">
      <div className="wrapper">
        <div className="title-experience">
          <h2>Professional Experience</h2>
        </div>
        <div className="experience-content">
          <a href="https://echopixeltech.com/true3d" target="_blank">
            <div className="experience-entry">
              <div className="experience-date">May 2023 - Jul 2023</div>
              <div className="experience-data">
                <div className="experience-data-title">
                  <p>Software Engineer Intern · Echopixel</p>
                </div>
                <div className="experience-data-description">
                  <p>
                    The True3D Viewer transforms traditional 2D medical data
                    into a 3D holographic twin of the patient for surgical
                    planning. At Echopixel, I directed the internationalization
                    and localization of the True3D Viewer from start to finish
                    with Qt Linguist. In this process, I suggested an extension
                    of the CMake build pipeline to efficiently manage the
                    creation and update of Qt translation files, streamlining
                    future localization processes to new regions. In
                    collaboration with a translator, we connected medical
                    facilities in Japan to Echopixel’s surgical planning
                    software.
                  </p>
                </div>
                <div className="experience-skills-list">
                  <ul>
                    <li>
                      <p>C++</p>
                    </li>
                    <li>
                      <p>Qt</p>
                    </li>
                    <li>
                      <p>CMake</p>
                    </li>
                    <li>
                      <p>Visual Studio</p>
                    </li>
                    <li>
                      <p>SourceTree</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
          <a href="https://blibli.com" target="_blank">
            <div className="experience-entry">
              <div className="experience-date">Jul 2022 - Aug 2022</div>
              <div className="experience-data">
                <div className="experience-data-title">
                  <p>Software Engineer Intern · Blibli</p>
                </div>
                <div className="experience-data-description">
                  <p>
                    Joining the research and development team, I initiated the
                    development of a new web performance testing tool. This tool
                    enabled automated testing and ensured future deployments of
                    their e-commerce site pass the specified web performance
                    standard, ensuring performance and great user experience for
                    blibli.com users. After completion, I presented the tool to
                    be integrated into three Blibli branches in Jakarta,
                    Bandung, and Bangalore.
                  </p>
                </div>
                <div className="experience-skills-list">
                  <ul>
                    <li>
                      <p>NodeJS</p>
                    </li>
                    <li>
                      <p>Google Lighthouse</p>
                    </li>
                    <li>
                      <p>BlueBirdJS</p>
                    </li>
                    <li>
                      <p>NPM</p>
                    </li>
                    <li>
                      <p>JEST.io</p>
                    </li>
                    <li>
                      <p>SonarQube</p>
                    </li>
                    <li>
                      <p>Git</p>
                    </li>
                    <li>
                      <p>Bitbucket</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://technosoftautomotive.com/modules/yana-e-commerce"
            target="_blank"
          >
            <div className="experience-entry">
              <div className="experience-date">May 2022 - Jun 2022</div>
              <div className="experience-data">
                <div className="experience-data-title">
                  <p>Software Engineer Intern · Technosoft Automotive</p>
                </div>
                <div className="experience-data-description">
                  <p>
                    I rejoined Technosoft to work on their new Yana E-Commerce
                    platform, which was my first exposure to commercial web
                    applications. On the backend, I implemented the
                    functionalities for user, product and order data operations.
                    This involved creating the .NET models, building the REST
                    APIs and handling corresponding insertion into the database.
                    On the frontend, I implemented several user interface
                    components such as the search bar, product views and task
                    bar using React and TailwindCSS.
                  </p>
                </div>
                <div className="experience-skills-list">
                  <ul>
                    <li>
                      <p>C#</p>
                    </li>
                    <li>
                      <p>.NET</p>
                    </li>
                    <li>
                      <p>React</p>
                    </li>
                    <li>
                      <p>NEXT.js</p>
                    </li>
                    <li>
                      <p>TailwindCSS</p>
                    </li>
                    <li>
                      <p>Jotai</p>
                    </li>
                    <li>
                      <p>Azure Cosmos DB</p>
                    </li>
                    <li>
                      <p>Visual Studio</p>
                    </li>
                    <li>
                      <p>Git</p>
                    </li>
                    <li>
                      <p>Azure DevOps</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
          <a href="https://technosoftautomotive.com" target="_blank">
            <div className="experience-entry">
              <div className="experience-date">Jun 2021 - Aug 2021</div>
              <div className="experience-data">
                <div className="experience-data-title">
                  <p>Research and Development Intern · Technosoft Automotive</p>
                </div>
                <div className="experience-data-description">
                  <p>
                    At Technosoft, I worked with their Microsoft Dynamics 365
                    Customer Relationship Management (CRM) for automotive
                    dealerships. With the research and development team, I
                    remodeled the new vehicle sales quotations module of the CRM
                    with the goal of embedding mobile applications into the user
                    interface, improving interactivity and data visualization
                    within the CRM. This involved building the full-stack
                    low-code mobile application, embedding it as a CRM component
                    and rebuilding the previous user interface, client-side
                    scripts and data processes to account for the change.
                  </p>
                </div>
                <div className="experience-skills-list">
                  <ul>
                    <li>
                      <p>Microsoft Dynamics 365 CRM</p>
                    </li>
                    <li>
                      <p>JavaScript</p>
                    </li>
                    <li>
                      <p>SQL</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Experience;
