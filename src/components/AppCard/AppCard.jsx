import React from 'react';

import { makeStyles } from '@material-ui/styles';
import {
  Avatar, Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    cursor: 'pointer'
  },
  appCard: {
    width: '100%',
    height: '100%'
  },
  title: {
    // fontSize: '16px',
    textAlign: 'center',
    margin: '8px'
  }
}))

const AppCard = props => {
  const { logoUrl, title } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar
        className={classes.appCard}
        variant="rounded"
        src={logoUrl}
      >
        {logoUrl}
      </Avatar>
      <Typography className={classes.title}>{title}</Typography>
    </div>
  )
};

export default AppCard;