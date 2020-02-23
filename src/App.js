import React from 'react';
import './App.css';


import Portfolio from './Components/Portfolio';

import './JS/deployDriver'
// import { Test } from './JS/deployDriver'

import testMkGuide from './JS/testMkGuide'

class App extends React.Component {

  componentDidMount() {
    // var script = document.createElement('script');
    // script.type = 'text/javascript';
    // script.async = true;
    // script.src = './JS/deployDriver.js';
    // document.head.appendChild(script);
    // test();

    console.log('#')
    console.log('##')
    console.log('###')

    console.log('Hire me?')
    console.log('Feel free to contact me: ww6652890@gmail.com')

    console.log('###')
    console.log('##')
    console.log('#')

    // testMkGuide()

  }

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
