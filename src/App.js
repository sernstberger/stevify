import React, { Component } from 'react';
import './App.css';

import ControlledExpansionPanels from './ExpansionPanels';
import ChipsArray from './Skills';
import MediaControlCard from './SomeCard';

function createData(key, label, description) {
  return { key, label, description };
}

class App extends Component {
  render() {

    const foos = [
      createData(
        1,
        "DeveloperTown",
        "At DeveloperTown, I work as a full-stack developer, though my focus is on front-end. My projects usually consist of Ruby on Rails/PostgreSQL/HAML/SCSS/CoffeeScript/React."
      ),
      createData(
        2,
        "Our Sunday Visitor Fusion",
        "Development of church management system that joins many disparate systems and allows users to join groups, pay bills, and many other church functions (not yet launched)."
      ),
      createData(
        3,
        "Interactive Intelligence PureCloud Documentation",
        "Full stack development of the documentation site for Interactive Intelligence (now Genesys) PureCloud - built on WordPress (help.mypurecloud.com).",
      ),
      createData(
        4,
        "StatSims",
        "Implemented user interface to run realistic simulations of NFL games, and providing needed information to fantasy football users (service no longer available).",
      ),
      createData(
        5,
        "ExactTarget HubExchange",
        "Implemented user interface for ExactTarget’s (now Salesforce) app store - HubExchange (hubexchange.s1.marketingcloudapps.com).",
      ),
    ]

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Steve Ernstberger</h1>
          Front-End Developer

          317.413.2489
          steve32285@gmail.com
        </header>
        <p className="App-intro">
          <h2>Expertise</h2>
          I am a Front-End Developer with 10 years of professional experience. I have worked with large enterprise clients like Interactive Intelligence and ExactTarget, start-ups with one employee, and everything in between. I enjoy solving problems and creating beautiful interfaces that are easy to use on any device.

          <h2>Technologies</h2>
          <ChipsArray />

          <h2>Selected Work</h2>
          {foos.map(( chip ) => (
            <MediaControlCard
              label={chip.label}
              description={chip.description}
            />
          ))}

          <h2>Previous Experience</h2>
          <ControlledExpansionPanels />

        </p>
      </div>
    );
  }
}

export default App;
