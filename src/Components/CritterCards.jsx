import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Blathers from '../assets/Blathers.png';


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
          <img className={classes.blathers} alt="Blathers" src={Blathers} />
          <p>{props.critter.desc}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
