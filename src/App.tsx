import React from "react";
import logo from "./logo.svg";
import About from "./pages/about";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Title from "./pages/title";
import Navigation from "./pages/navigation";
import { SuperSEO } from "react-super-seo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="overall-container">
        {/* <SuperSEO
          title="Tan Jeremy Tandiary"
          description="Hi! My name is Tan Jeremy Tandiary, a recently graduated Mathematics and Computer Science major from the University of Illinois at Urbana-Champaign (UIUC). I had multiple experiences as a software engineer, building software in C++, JavaScript, C#, Python and many more for multiple corporations. Visit my portfolio site for more information. "
        >
          <meta
            name="description"
            content="Hi! My name is Tan Jeremy Tandiary, a recently graduated Mathematics and Computer Science major from the University of Illinois at Urbana-Champaign (UIUC). I had multiple experiences as a software engineer, building software in C++, JavaScript, C#, Python and many more for multiple corporations. Visit my portfolio site for more information. "
          />
        </SuperSEO> */}
        <header className="App-header">
          <Title />
          <div className="navbar">
            <Navigation />
          </div>
          <About />
          <a id="Experience" className="anchor"></a>
          <Experience />
          <div className="offset">
            <a id="Education" className="anchor"></a>
            <Education />
          </div>
          <div className="offset">
            <a id="Projects" className="anchor"></a>
            <Projects />
          </div>
          <div className="offset">
            <a id="Skills" className="anchor"></a>
            <Skills />
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
