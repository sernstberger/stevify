import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
// import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
// import PlayArrowIcon from 'material-ui-icons/PlayArrow';
// import SkipNextIcon from 'material-ui-icons/SkipNext';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  // controls: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   paddingLeft: theme.spacing.unit,
  //   paddingBottom: theme.spacing.unit,
  // },
  // playIcon: {
  //   height: 38,
  //   width: 38,
  // },
});

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography type="headline">{props.label}</Typography>
            <Typography type="subheading" color="textSecondary">
              {props.description}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          // image="/static/images/cards/live-from-space.jpg"
          // image="http://lorempixel.com/400/400"
          title="Live from space album cover"
        />
      </Card>
    </div>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);