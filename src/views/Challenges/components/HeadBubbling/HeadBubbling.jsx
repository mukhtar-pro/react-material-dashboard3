import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Grid,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  brief: {
    color: '#8798AD',
    fontSize: '18px',
    textTransform: 'uppercase'
  },
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  badge: {
    borderRadius: '5px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '15px',
  },
  duration: {
    fontSize: '12px',
    color: theme.palette.inperson.font,
    backgroundColor: theme.palette.inperson.background,
    width: '106px',
    marginTop: '16px',
    marginBottom: '20px',
  },
  tasks: {
    fontSize: '12px',
    color: '#2E384D',
    backgroundColor: theme.palette.phonescreen.background,
    width: '50px',
  },
  title: {
    width: '200px'
  }, 
  bubbling: {
    color: theme.palette.primary.main,
    fontSize: '40px',
    fontWeight: 'bold'
  },
  context: {
    margin: '22px 0 22px 0'
  },
}));

const badges = [
  "Loops",
  "Strings",
  "Medium"
]

const contexts = [
  'What comes to your mind? Underwater bubbles? Soap bubbles? Bubbles in a cauldron of toxic goo? A bubble wand? Will your bubbles wander aimlessly in the breeze or race to the surface underwater? Bubbles of any nature can be so much fun as they move around with very unique characteristics and best of all… they POP!',
  'For any bubble project you first have to design a killer bubble. Will you use an SVG? PNG? Canvas? Or go “CSS only”? We suggest that you use something that scales nicely as bubbles come in so many sizes.',
  "Of course, we’re looking for awesome animation. Have you ever thought of how a bubble moves? Maybe GSAP's MotionPathPlugin can help you create the exactly path your wanting to create."
]

const HeadBubbling = () => {
  const classes = useStyles();
  return(
    <Grid container>
      <Grid item xs={12} className={classes.row}>
        <Typography className={`${classes.brief} ${classes.title}`}>Current challenge</Typography>
        <Typography className={`${classes.duration} ${classes.badge}`}>May 19 - May 30</Typography>
      </Grid>
      <Grid item xs={12} className={classes.row}>
        <Typography className={`${classes.bubbling} ${classes.title}`}>Bubbling</Typography>
        {badges.map((badge, index) => (
          <Typography key={index} className={`${classes.tasks} ${classes.badge}`}>{badge}</Typography>
        ))}
      </Grid>
      <Grid item xs={12}>
        {contexts.map((context, index) => (
          <Typography key={index} className={classes.context}>{context}</Typography>
        ))}
      </Grid>
    </Grid>
  )
};

export default HeadBubbling;