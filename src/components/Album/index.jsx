import React from 'react';

import { withStyles } from 'material-ui/styles';

import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import ArtistsList from '../ArtistsList';

const styles = {
  card: {
    borderRadius: 4,
    backgroundColor: "transparent",
    textAlign: "center",
    transition: "350ms all",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,.75)",
      boxShadow: "0 10px 20px rgba(0,0,0,.25)",
      // color: "#000",
    }
  },
  cardContent: {
    padding: 5,
  }
};

class Album extends React.Component {
// const  = ({ artists, name, image }) => {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card} elevation={0}>
        <CardContent className={classes.cardContent}>
          <img src={this.props.image} alt={this.props.name} style={{maxWidth: "100%"}}/>
          {this.props.name}

          <ArtistsList artists={this.props.artists} />
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Album);
