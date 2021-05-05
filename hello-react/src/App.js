import React from 'react';
import HomepageImage from './components/HomepageImage'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomepageImage />
        <p>
          HAHA E
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
