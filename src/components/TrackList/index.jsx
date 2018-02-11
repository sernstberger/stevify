import React from 'react';
import List from 'material-ui/List';

import Track from '../Track';

// const TrackList = ({tracks}) => {
class TrackList extends React.Component {

  render() {
    console.log("blahhhhhhhh", this.props.tracks);
    
    return (
      <List>
        Title goes here
        { 
          this.props.tracks.map((track, i) => {
            return (
              <Track
                position={i+1}
                name={track.track.name}
                artists={track.track.artists}
                image={track.track.album.images[2].url}
                duration={track.track.duration_ms}
              />
            );
          })
        }
      </List>
    )
  }
}

export default TrackList;