import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Blathers from '../assets/Blathers.png';
import { IconButton, Collapse } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    minWidth: 360,
    maxWidth: '30%',
    margin: '1vh'
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

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.critter.name}
        </Typography>
        {/* <img alt={props.critter.name} src={bugs[props.critter._label]} /> */}
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="div">
          <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
            <li>Available: {getMonth(props.critter.smonth)} - {getMonth(props.critter.emonth)}</li>
            <li>Time: {props.critter.stime} - {props.critter.etime}</li>
            <li>Location: {props.critter.loc}</li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          disableRipple
          size='small'
        >
          <img className={classes.blathers} alt="Blathers" src={Blathers} />
        </IconButton>
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
