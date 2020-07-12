import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography, Grid } from '@material-ui/core';

import { Application, PhoneScreen, InPerson, Offer } from './components';
const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  row1: {
    marginTop: theme.spacing(3)
  },
  spacer: {
    flexGrow: 1
  },
  dayButton: {
    marginRight: theme.spacing(1),
    borderRadius: '10px',
    width: '96px',
    height: '38px',
    border: '1px solid #2E384D'
  },
  weekButton: {
    borderRadius: '10px',
    width: '96px',
    height: '38px',
  },
  welcome: {
    marginRight: theme.spacing(1),
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const UsersToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <Typography
          variant="h3"
        >
          Welcome back, John
        </Typography>
        <span className={classes.spacer} />
        <Button className={classes.dayButton}>Day</Button>
        <Button
          color="primary"
          variant="contained"
          className={classes.weekButton}
        >
          Week
        </Button>
      </div>
      <div className={classes.row1}>     
        <Grid container spacing={4}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Application />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <PhoneScreen />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <InPerson />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Offer />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;
