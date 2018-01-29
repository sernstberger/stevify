import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

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
});

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card} style={{height: "100%"}}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography type="headline">{props.label}</Typography>
            <Typography type="subheading" color="textSecondary">
              {props.description}
            </Typography>
            { props.link && 
              <Button raised color="primary">Visit {props.link}</Button>
            }
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          // image="/static/images/cards/live-from-space.jpg"
          // image="http://lorempixel.com/400/400"
          title="Live from space album cover"
        />
      </Card>
    </Grid>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);