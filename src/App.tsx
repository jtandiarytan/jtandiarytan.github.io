import React from 'react';
import logo from './logo.svg';
import About from './pages/about'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Tan Jeremy Tandiary</p>
        {About}
      </header>
    </div>
  );
}

export default App;
