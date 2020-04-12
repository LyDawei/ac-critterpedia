import React from 'react'
import { Typography, Box, Container } from '@material-ui/core';
export default function CritterPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="critterPanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} disableGutters>{children}</Container>}
    </Typography>
  );
}
