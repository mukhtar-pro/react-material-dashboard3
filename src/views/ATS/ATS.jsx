import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid
} from '@material-ui/core';

import { JobApplication } from './components';
import { Calendar, Interviews } from 'components';

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: '20px'
  },
  leftPanel: {
    background: 'white',
    padding: '20px 50px 30px 10px',
    borderRadius: '15px'
  },
  rightPanel: {
    padding: '36px',
    background: '#F9F9FF'
  }
}))

const ATS = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={8} sm={7} xl={8} xs={12} className={classes.leftPanel}>
          <JobApplication />
        </Grid>
        <Grid item lg={4} sm={5} xl={4} xs={12} className={classes.rightPanel}>
          <Calendar />
          <Interviews />
        </Grid>
      </Grid>
    </div>
  )
};

export default ATS;