import React from 'react';
import {
  AppBar,
  RadioGroup,
  Radio,
  FormControlLabel,
  Toolbar,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  title: {
    flexGrow: 1,
  },
  options: {
    flexGrow: 2,
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
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            Critterpedia
          </Typography>
          <div className={classes.options}>
            <RadioGroup className={classes.radioGroup} value={props.type} onChange={(e) => props.setType(e.target.value)}>
              <FormControlLabel value="bugs" control={<Radio />} label="Bugs" />
              <FormControlLabel value="fish" control={<Radio />} label="Fish" />
            </RadioGroup>

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
