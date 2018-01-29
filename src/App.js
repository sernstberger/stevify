import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import './App.css';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAsterisk from '@fortawesome/fontawesome-pro-light/faAsterisk';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import ControlledExpansionPanels from './ExpansionPanels';
import ChipsArray from './Skills';
import MediaControlCard from './SomeCard';

function createData(key, label, description) {
  return { key, label, description };
}

fontawesome.library.add(faAsterisk);

const styles = theme => ({
  root: {
    padding: 60,
  },
});

class App extends React.Component {
  render() {

    const { classes } = this.props;

    const foos = [
      createData(
        1,
        "DeveloperTown",
        "I built out the website for DeveloperTown using WordPress.",
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
          <Typography type="display3" className="text-white">Steve Ernstberger</Typography>
          <Typography type="display2" className="text-white">Front-End Developer</Typography>

          <Typography type="headline" className="text-white">317.413.2489 ⋅ steve32285@gmail.com</Typography>
        </header>
        <div className={classes.root}>
          <Grid container spacing={30}>
            <Grid item xs={12}>

              <h2>Expertise</h2>
              <p>I am a Front-End Developer with 10 years of professional experience. I have worked with large enterprise clients like Interactive Intelligence and ExactTarget, start-ups with one employee, and everything in between. I enjoy solving problems and creating beautiful interfaces that are easy to use on any device.</p>

              <h2>Technologies</h2>

              <ChipsArray
                avatar={ <FontAwesomeIcon icon={["fal","asterisk"]}/> }
              />

              <h2>Selected Work</h2>
              {foos.map(( chip ) => (
                <MediaControlCard
                  label={chip.label}
                  description={chip.description}
                />
              ))}

              <h2>Previous Experience</h2>
              <ControlledExpansionPanels />
            </Grid>
          </Grid>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(App);
