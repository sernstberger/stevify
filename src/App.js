import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ControlledExpansionPanels from './ExpansionPanels';
import ChipsArray from './Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Steve Ernstberger
          Front-End Developer

          317.413.2489
          steve32285@gmail.com

          Expertise
          I am a Front-End Developer with 10 years of professional experience. I have worked with large enterprise clients like Interactive Intelligence and ExactTarget, start-ups with one employee, and everything in between. I enjoy solving problems and creating beautiful interfaces that are easy to use on any device.

          Technologies
          HTML5 / CSS3
          Javascript / jQuery
          Bootstrap
          React
          Git
          Ruby on Rails
          PHP
          WordPress
          Photoshop
          Sketch
          After Effects
          <ChipsArray />

          Selected Work
          Our Sunday Visitor Fusion
          Development of church management system that joins many disparate systems and allows users to join groups, pay bills, and many other church functions (not yet launched).

          Interactive Intelligence PureCloud Documentation
          Full stack development of the documentation site for Interactive Intelligence (now Genesys) PureCloud - built on WordPress (help.mypurecloud.com).

          StatSims
          Implemented user interface to run realistic simulations of NFL games, and providing needed information to fantasy football users (service no longer available).

          ExactTarget HubExchange
          Implemented user interface for ExactTarget’s (now Salesforce) app store - HubExchange (hubexchange.s1.marketingcloudapps.com).







          Previous Experience
          <ControlledExpansionPanels />

        </p>
      </div>
    );
  }
}

export default App;