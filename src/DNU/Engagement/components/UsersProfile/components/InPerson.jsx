import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

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
  inperson: {
    color: theme.palette.inperson.font,
    borderRadius: '10px',
    backgroundColor: theme.palette.inperson.background,
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
            <PersonIcon className={classes.inperson} />
            <Typography className={classes.title}>IN PERSON</Typography>
            <Typography variant="h5">1</Typography>
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
                  Jacob Cooper has face-to-face interview for <span className={classes.decorate}>Software-Engineer</span> at <span className={classes.decorate}>Oragon</span>on 20 May, 2020
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
