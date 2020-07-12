import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Grid,
  Typography,
  Avatar
} from '@material-ui/core';

import { 
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 50px 0 0',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  },
  badge: {
    fontSize: '12px',
    backgroundColor: theme.palette.application.background,
    width: '60px',
    borderRadius: '5px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
  },
  coding: {
    width: '100%',
    height: '100%'
  },
  mark: {
    width: '40px',
    height: '24px',
    borderRadius: '5px',
    border: '1px solid #F1F3F4',
    marginLeft: '10px',
    textAlign: 'center'
  },
  up: {
    color: '#39D98A'
  },
  down: {
    color: '#EA3D2F'
  }
}))

const CodingPracticeCard = props => {
  const classes = useStyles();
  const { practice } = props;

  return(
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.row}>
        <Typography variant="subtitle2">{practice.title}</Typography>
      </Grid>
      <Grid item xs={12} className={classes.row} style={{justifyContent: 'space-between'}}>
        <div className={classes.row}>
          {practice.pathes.map((path, index) => (
            <Typography key={index} className={classes.badge}>{path}</Typography>
          ))}
        </div>
        <div className={classes.row}>
          <Typography className={`${classes.up} ${classes.mark}`}>{practice.up}</Typography>
          <Typography className={`${classes.down} ${classes.mark}`}>{practice.down}</Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Avatar
          variant="rounded"
          src={practice.coding}
          className={classes.coding}
        ></Avatar>
      </Grid>
    </Grid>
  )
};

export default CodingPracticeCard;