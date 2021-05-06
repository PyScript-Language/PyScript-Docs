import React from 'react';
import HomepageImage from './components/HomepageImage'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br>
        </br>
        <HomepageImage />
        <h4>
          PyScript: A Python and Js language combined
        </h4>
        <br>
        </br>
        <h6 align="right">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </h6>
      </header>
    </div>
  );
}

export default App;
