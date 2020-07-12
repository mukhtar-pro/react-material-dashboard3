import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Grid,
  Typography,
  Divider,
} from '@material-ui/core';

import {
  Biography,
  ShareProfile,
  Detail
} from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FFFFFF',
    border: '1px solid #F1F3F4',
    boxSizing: 'border-box',
    borderRadius: '15px',
    padding: '32px'
  },
  biography: {
    marginBottom: '15px'
  },
  title: {
    color: '#8798AD',
    margin: '20px 0 10px 0'
  },
  divider: {
    margin: '24px 0',
    width: '100%'
  },
}))

const Portfolio = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={9} sm={12} md={9} xl={9} xs={12}>
          <Biography />
          <Typography className={classes.title}>Biography</Typography>
          <Typography className={classes.biography}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</Typography>
          <Typography className={classes.biography}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</Typography>
        </Grid>
        <Grid item lg={3} sm={12} md={3} xl={3} xs={12} style={{padding: '32px'}}>
          <ShareProfile />
        </Grid>
        <Divider className={classes.divider}/>
        <Grid item xs={12}>
          <Detail />
        </Grid>
      </Grid>
    </div>
  )
};

export default Portfolio;