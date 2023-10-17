import React from 'react';
import '../styling/skills.css';

function Skills() {
  return (
    <div className="container-content" id="Skills">
        <div className="wrapper"><div className="title"><h2>Skills</h2></div></div>
        <div className="wrapper">
            <div className="description">
                <ul>
                    <li>
                    Programming Languages: Python, C++, JavaScript, TypeScript, C, C#, CMake, HTML, CSS, CLI, Java
                    </li>
                    <li>
                    DevOps: GitHub, BitBucket, JIRA, Azure DevOps, GitFlow, Sourcetree, Visual Studio, SonarQube, Jenkins, Docker
                    </li>
                    <li>
                    Databases: Azure Cosmos DB, MongoDB, RESTful APIs, SQL, GraphQL, SQLite
                    </li>
                    <li>
                    Frameworks/Libraries: React, .NET, Qt, NEXT.js, NumPy, PyTorch, Pandas, Tensorflow, NPM, TailwindCSS, Microsoft
Dynamics 365, Angular, Redux, React Native, Express, SciPy, JEST.io, BluebirdJS, Flask
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Skills;