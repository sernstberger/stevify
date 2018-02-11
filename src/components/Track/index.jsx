import React from 'react';

import { withStyles } from 'material-ui/styles';

import Avatar from 'material-ui/Avatar';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Typography from 'material-ui/Typography';

import ArtistsList from '../ArtistsList';

const styles = {
  card: {
    borderRadius: 4,
    backgroundColor: "transparent",
    transition: "350ms all",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,.25)",
      // boxShadow: "0 10px 20px rgba(0,0,0,.25)",
      // color: "#000",
    }
  },
  cardContent: {
    padding: 5,
  },
  TrackPrimaryText: {
    margin: 0,
  },
  TrackSecondaryText: {
    fontWeight: 300,
    fontSize: 12,
    margin: "5px 0 0",
    opacity: ".8",
  },
};

class Track extends React.Component {
  // const Track = ({position, name, artists, image, duration}) => {
  render() {
    const { classes } = this.props;
    return (
      <ListItem className={classes.card}>
        {this.props.position}
        <img src={this.props.image} alt="thing" />
        <div>
          <p className={classes.TrackPrimaryText}>
            {this.props.name}
          </p>
          <p className={classes.TrackSecondaryText}>
            <ArtistsList artists={this.props.artists} />
          </p>
        </div>
        <ListItemSecondaryAction>{this.props.duration}</ListItemSecondaryAction>
      </ListItem>
    )
  }
}

export default withStyles(styles)(Track);