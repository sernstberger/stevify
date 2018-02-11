import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
// import MenuIcon from 'material-ui-icons/Menu';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

import Player from './components/Player';
import TrackList from './components/TrackList';
import AlbumList from './components/AlbumList';

import axios from 'axios';

const drawerWidth = 240;

const styles = theme => ({

  root: {
    color: "#fff",
    display: "flex",
    height: "100%",
    overflow: "hidden",
    margin: 0,
    position: "relative",
  },
  
  sidebar: {
    backgroundColor: "rgba(0,0,0,.1)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    position: "relative",
    width: 240,
    zIndex: 1,
  },
  mainContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "rgba(0,0,0,.85)",
    zIndex: 2,
    width: "100%",
  },
  scrollableContent: {
    flexGrow: 1,
    overflowY: "auto",
    padding: 20,
  },
  
  bg: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: 'absolute',
    width: '100%',
    height: '100%',
    filter: "brightness(50%) blur(80px)",
    transform: "scale(1.25)",
    zIndex: 1,
  },

  content: {
    // backgroundColor: theme.palette.background.default,
    backgroundColor: "rgba(0,0,0,.65)",
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: "100%",
    // height: 'calc(100% - 56px)',
    // marginTop: 56,
    // [theme.breakpoints.up('sm')]: {
    //   height: 'calc(100% - 64px)',
    //   marginTop: 64,
    // },
  },
});

const randNum = Math.floor(Math.random() * 5) + 0

class ResponsiveDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      top50Tracks: [],
    }
  }
  // state = {
  //   mobileOpen: false,
  // };
  componentWillMount() {
    const token = "BQDvv-3occn01gm4oB5auzDOLgBYxlLrCyH4gqndTHRw-4kdThq5paYZiDxaNRvRGrzJA6K67cZP8stlWHQebvAn1laCuBmLdLKyGHbA7H9Jl2JJR9XgzRSFaQLTTv2S-ANHB5VHvG_rlzI";
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    const url = 'https://api.spotify.com/v1/browse/new-releases?limit=6'
    axios.get(url)
      .then(response => {
        // console.log("albums: ", response.data.albums);
        
        const posts = response.data.albums.items.map(obj => obj);
        this.setState({ 
          posts: posts,
          bgImage: posts[randNum].images[2].url,
        });
        console.log("work", this.state.posts[0].images[0].url);
      });



    const urlTop = "https://api.spotify.com/v1/users/spotifycharts/playlists/37i9dQZEVXbLRQDuF5jeBp"
    axios.get(urlTop)
      .then(response => {
        // console.log("bacon", response.data.tracks);
        
        const top50Tracks = response.data.tracks.items.map(obj => obj);
        this.setState({ top50Tracks: top50Tracks });
      });
  }

  // handleDrawerToggle = () => {
  //   this.setState({ mobileOpen: !this.state.mobileOpen });
  // };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.drawerHeader} />
        <Divider />
        <List>ajlkfajsf</List>
        <Divider />
        <List>lakdjflajfasdl</List>
      </div>
    );

    return (
      <div className={classes.root}>
        <div className={classes.bg} style={{backgroundImage: `url(${this.state.bgImage})`}}></div>
        
        <div className={classes.sidebar}>
          <div className={classes.scrollableContent}>
            {drawer}
          </div>
        </div>
        <div className={classes.mainContent}>
          <div className={classes.scrollableContent}>
            <Typography variant="display4">Title test here</Typography>
            {/* <img src="https://i.scdn.co/image/49a45aac2c93bab9575de13cee2d71b7eb164cab" style={{maxWidth: "100%"}}/> */}
            <AlbumList albums={this.state.posts} />
            <Grid container>
              <Grid item xs={12} sm={6}>
                <TrackList tracks={this.state.top50Tracks} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TrackList tracks={this.state.top50Tracks} />
              </Grid>
            </Grid>
          </div>
        </div>
        
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
