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

import { projects } from './store';

fontawesome.library.add(faAsterisk);

const styles = theme => ({
  root: {
    padding: 60,
  },
});

class App extends React.Component {
  render() {

    const { classes } = this.props;

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

              <Typography type="headline">Expertise</Typography>
              <Typography type="subheading">I am a Front-End Developer with 10+ years of professional experience. I have worked with large enterprise clients like Interactive Intelligence and ExactTarget, start-ups with one employee, and everything in between. I enjoy solving problems and creating beautiful interfaces that are easy to use on any device.</Typography>

              <Typography type="headline">Technologies</Typography>
              <ChipsArray
                avatar={ <FontAwesomeIcon icon={["fal","asterisk"]}/> }
              />

              <h2>Selected Work</h2>
              <Grid container alignItems="stretch">
                {projects.map(( project ) => (
                  <MediaControlCard
                    label={project.label}
                    description={project.description}
                    link={project.link}
                  />
                ))}
              </Grid>

              <h2>Experience</h2>
              <ControlledExpansionPanels />
            </Grid>
          </Grid>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(App);
