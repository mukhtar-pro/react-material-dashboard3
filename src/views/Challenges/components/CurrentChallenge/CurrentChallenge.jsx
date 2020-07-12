import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Grid,
  Divider
} from '@material-ui/core';

import { HeadBubbling } from '../HeadBubbling';
import PreChallenges  from '../PreChallenges';
import ChallengeCollection from '../ChallengeCollection';

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: '20px'
  },
  leftPanel: {
    background: 'white',
    padding: '0 50px 30px 30px',
    borderRadius: '15px'
  },
  rightPanel: {
    padding: '30px',
    height: '1010px',
    overflowY: 'scroll',
    background: '#F9F9FF'
  }
}))

const Challenges = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={8} sm={7} xl={8} xs={12} className={classes.leftPanel}>
          <HeadBubbling />
          <Divider />
          <ChallengeCollection />
        </Grid>
        <Grid item lg={4} sm={5} xl={4} xs={12} className={classes.rightPanel}>
          <PreChallenges />
        </Grid>
      </Grid>
    </div>
  )
};

export default Challenges;