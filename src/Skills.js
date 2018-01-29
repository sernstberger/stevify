import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

class ChipsArray extends React.Component {
  state = {
    chipData: [
      { key: 0, label: 'HTML5' },
      { key: 1, label: 'CSS3' },
      { key: 2, label: 'Javascript' },
      { key: 3, label: 'jQuery' },
      { key: 4, label: 'React' },
      { key: 5, label: 'Bootstrap' },
      { key: 6, label: 'PHP' },
      { key: 7, label: 'WordPress' },
      { key: 8, label: 'Photoshop' },
      { key: 9, label: 'Git' },
      { key: 10, label: 'Ruby on Rails' },
      { key: 11, label: 'Sketch' },
      { key: 12, label: 'Premiere Pro' },
      { key: 13, label: 'After Effects' },
    ],
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        {this.state.chipData.map(data => {
          let avatar = null;


          avatar = (
            <Avatar>
              { this.props.avatar }
            </Avatar>
          );


          return (
            <Chip
              key={data.key}
              avatar={avatar}
              label={data.label}
              className={classes.chip}
            />
          );
        })}
      </Paper>
    );
  }
}

ChipsArray.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChipsArray);