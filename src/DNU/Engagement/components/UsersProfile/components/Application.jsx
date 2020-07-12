import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid #F1F3F4',
    borderRadius: '15px'
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    marginTop: '15px'
  },
  application: {
    color: theme.palette.primary.main,
    borderRadius: '10px',
    backgroundColor: theme.palette.background.card1,
    marginRight: '10px'
  },
  title: {
    fontWeight: 400,
    fontSize: '18px',
    color: '#8798AD',
    margin: '0 15px 0 0'
  },
  avatar: {
    width: '32px',
    height: '32px',
    marginRight: '5px'
  },
  remain: {
    fontSize: '14px',
    color: '#8798AD',
    marginTop: '3px'
  },
  decorate: {
    color: '#5CD9D8'
  }
}));

const items = [
  {},
  {}
]

const Application = props => {
  const { className, avatar } = props;

  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
        >
          <Grid item xs={12} className={classes.row}>
            <DescriptionIcon className={classes.application} />
            <Typography className={classes.title}>APPLICATION</Typography>
            <Typography variant="h5">2</Typography>
          </Grid>
          {items.map( (item, index) => (
            <Grid key={index} item xs={12} className={classes.row}>
              <div>
                <Avatar
                  className={classes.avatar}
                  src={avatar}
                >
                  {item.avatarUrl}
                </Avatar>
              </div>
              <div>
                <Typography>
                  Jacob Cooper applied for <span className={classes.decorate}>Software-Engineer</span> at <span className={classes.decorate}>Oragon</span>
                </Typography>
                <Typography className={classes.remain}>
                  7 day left
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

Application.propTypes = {
  className: PropTypes.string
};

export default Application;
