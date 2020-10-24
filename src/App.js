import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes/routes';
import MeHeader from './components/header';

// const AboutPage = () => {
//   return <h3>About Page</h3>;
// };

function App() {
  return (
    <div className="App">
      <MeHeader></MeHeader>
      <Router>{routes}</Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
