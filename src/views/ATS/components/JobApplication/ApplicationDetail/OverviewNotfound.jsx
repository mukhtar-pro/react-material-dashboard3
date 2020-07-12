import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Avatar,
  Typography
} from '@material-ui/core';

import { CustomButton } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '60px auto'
  },
  notFound: {
    width: '260px',
    height: '180px'
  },
  alert: {
    margin: '15px 0 25px 0',
    fontSize: '16px'
  },
}));

const OverviewNotfound = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Avatar
        variant="square"
        src="./images/other/NotFound.svg"
        className={classes.notFound}
      >
      </Avatar>
      <Typography className={classes.alert}>No one has yet shared interview experience with this company.</Typography>
      <div>
        <CustomButton buttonLabel="Be the first!" />
      </div>
    </div>
  )
}

export default OverviewNotfound;