import React from 'react';
import './App.css';

// import NavComponent from './Components/NavComponent';
import Portfolio from './Components/Portfolio';
// import { BrowserRouter as Router } from 'react-router-dom'



class App extends React.Component {
  render() {
    return (
      // <Router></Router>
        <div>
          <Portfolio />
        </div>
      
    );
  }

}

export default App;
