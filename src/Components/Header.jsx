import React from 'react';
import {
  AppBar,
  RadioGroup,
  Radio,
  FormControlLabel,
  Toolbar,
  Typography,
  IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  options: {
    flexGrow: 4,
    display: 'flex',
    flexDirection: 'row'
  },
  radioGroup: {
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'row',
  }

}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className="header">
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Critterpedia
          </Typography>
          <div className={classes.options}>
            <RadioGroup className={classes.radioGroup} value={props.hemisphere} onChange={(e) => props.setHemisphere(e.target.value)}>
              <FormControlLabel value="north" control={<Radio />} label="North" />
              <FormControlLabel value="south" control={<Radio />} label="South" />
            </RadioGroup>
          </div>
          <div className="day">
            {props.time}
            &nbsp;
            {props.day}
          </div>

        </Toolbar>
      </AppBar>
    </div >
  );
}
