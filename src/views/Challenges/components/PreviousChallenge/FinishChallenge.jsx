import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import {
  Grid,
  Typography,
  Avatar,
} from '@material-ui/core';

import {
  KeyboardBackspace
} from '@material-ui/icons';

import Ranking from './Ranking';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20px'
  },
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  arrow: {
    margin: '20px 10px 20px 0'
  },
  bubbling: {
    color: theme.palette.application.font,
    fontSize: '32px',
    fontWeight: '500'
  },
  badge: {
    fontSize: '12px',
    color: '#2E384D',
    backgroundColor: theme.palette.phonescreen.background,
    width: '50px',
    borderRadius: '5px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '15px',
  },
  create: {
    margin: '10px 0'
  },
  winners: {
    width: '270px',
    height: '270px'
  },
}))

const badges = [
  "Loops",
  "Strings",
  "Medium"
]

const rankings = [
  {
    medal: './images/other/Gold.svg',
    avatar: './images/avatars/John Doe.svg',
    name: 'John Doe',
    skills: [
      "Java",
      "CSS",
      "HTML"
    ],
    collection: './images/other/Collection.svg'
  },
  {
    medal: './images/other/Silver.svg',
    avatar: './images/avatars/John Doe.svg',
    name: 'John Doe',
    skills: [
      "Java",
      "CSS",
      "HTML"
    ],
    collection: './images/other/Collection.svg'
  },
  {
    medal: './images/other/Copper.svg',
    avatar: './images/avatars/John Doe.svg',
    name: 'John Doe',
    skills: [
      "Java",
      "CSS",
      "HTML"
    ],
    collection: './images/other/Collection.svg'
  },
]

const FinishChallenge = () => {
  const classes = useStyles();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  return(
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.row} onClick={goBack} style={{cursor: 'pointer'}}>
        <KeyboardBackspace className={classes.arrow} />
        <Typography>Back</Typography>
      </Grid>
      <Grid item xs={12} className={classes.row}>
        <Typography className={classes.bubbling}>Bubbling</Typography>
        {badges.map((badge, index) => (
          <Typography key={index} className={classes.badge}>{badge}</Typography>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.create}>Create an animation involving bubbles</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container className={classes.row}>
          <Grid item lg={5} sm={12} xl={5} xs={12}>
            <Avatar
              src="./images/other/Winners.svg"
              className={classes.winners}
            >
            </Avatar>
          </Grid>
          <Grid item lg={7} sm={12} xl={7} xs={12}>
            {rankings.map((ranking, index) => (
              <Ranking key={index} ranking={ranking}/>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default FinishChallenge;