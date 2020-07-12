import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import AnnouncementIcon from '@material-ui/icons/Announcement';

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
  offer: {
    color: theme.palette.offer.font,
    borderRadius: '10px',
    backgroundColor: theme.palette.offer.background,
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
]

const Offer = props => {
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
            <AnnouncementIcon className={classes.offer} />
            <Typography className={classes.title}>OFFER</Typography>
            <Typography variant="h5">0</Typography>
          </Grid>
          { items.length === 0 
          ? (<Typography className={classes.row}>Not have offer</Typography>)
          : items.map( (item, index) => (
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

Offer.propTypes = {
  className: PropTypes.string
};

export default Offer;
