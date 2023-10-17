import React from 'react';
import logo from './logo.svg';
import About from './pages/about'
import Education from './pages/education'
import Experience from './pages/experience'
import Projects from './pages/projects'
import Skills from './pages/skills'
import Title from './pages/title'
import Navigation from './pages/navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <div className="navbar"><Navigation/></div>
        <About />
        <div className='offset'>
          <a id="Experience" className='anchor'></a>
        <Experience/>
        </div>
        <div className='offset'>
          <a id="Education" className='anchor'></a>
        <Education/>
        </div>
        <div className='offset'>
          <a id="Projects" className='anchor'></a>
        <Projects/>
        </div>
        <Skills/>
        
      </header>
    </div>
  );
}

export default App;
