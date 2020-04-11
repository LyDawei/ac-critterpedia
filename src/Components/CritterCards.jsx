import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Blathers from '../assets/Blathers.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { Collapse, Switch, FormGroup, FormControlLabel } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ExploreIcon from '@material-ui/icons/Explore';
// import * as bugs from '../assets/bugs/index.js';


const useStyles = makeStyles({
  root: {
    minWidth: 360,
    maxWidth: '30%',
    margin: '1vh',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  blathers: {
    float: 'left'
  }
});

export default function CritterCards(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function getMonth(idx) {
    const months = [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec'];

    return months[idx - 1];
  }

  const handleCaughtToggle = () => {
    props.onCaught(props.critter);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.critter.name}
        </Typography>
        <List dense disablePadding>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <EventIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Availability"
              secondary={`${getMonth(props.critter.smonth)} - ${getMonth(props.critter.emonth)}`} />
            {props.critter.smonth2 ?
              <ListItemText
                primary='Availability'
                secondary={`${getMonth(props.critter.smonth2)} - ${getMonth(props.critter.emonth2)}`} /> : null}
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ScheduleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Time" secondary={`${props.critter.stime} - ${props.critter.etime}`} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ExploreIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Location" secondary={props.critter.loc} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
            <ListItemAvatar>
              <Avatar>
                <img className={classes.blathers} alt="Blathers" src={Blathers} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Blathers" />
          </ListItem>
        </List>
      </CardContent>
      <CardActions >
        <FormGroup>
          <FormControlLabel
            control={
              <Switch size="small"
                checked={!!props.critter.chk}
                onChange={handleCaughtToggle} />}
            label="Caught"
            labelPlacement="start"
          />

        </FormGroup>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <sub>{props.critter.desc}</sub>
          </Typography>
        </CardContent>
      </Collapse>
    </Card >
  );
}
