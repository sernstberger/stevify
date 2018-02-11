import React from 'react';

import Grid from 'material-ui/Grid';

import Album from '../Album';

const AlbumList = ({ albums }) => {
  return (
    <Grid container>
      {albums.map((bar) => {
        return (
          <Grid item xs={6} sm={2} key={bar.id}>
            <Album 
              artists={bar.artists}
              name={bar.name}
              image={`${bar.images[1].url}`}
            />
          </Grid>
        );
      })}
    </Grid>
  )
}

export default AlbumList;