import React from 'react';

import Avatar from 'material-ui/Avatar';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Typography from 'material-ui/Typography';

const ArtistsList = ({artists}) => {
  return (
    <div>
      {artists.map((artist) => {
        return (
          <span key={artist.id}>{artist.name}, </span>
        );
      })}
    </div>
  )
}

export default ArtistsList;