import React from './node_modules/react';
import { Chip, Paper } from './node_modules/@material-ui/core';
export default function CritterChip(props) {

  return (

    <Chip
      label='Available'
      color='primary'
      clickable />

  );
}
