import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid #F1F3F4',
    borderRadius: '15px',
    marginTop: '20px'
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    marginTop: '15px'
  },
  phonescreen: {
    color: theme.palette.phonescreen.font,
    borderRadius: '10px',
    backgroundColor: theme.palette.phonescreen.background,
    marginRight: '10px'
  },
  inperson: {
    color: theme.palette.inperson.font,
    borderRadius: '10px',
    backgroundColor: theme.palette.inperson.background,
    marginRight: '10px'
  },
  remain: {
    fontSize: '14px',
    color: '#8798AD',
    marginTop: '3px'
  }
}));

const phonescreen = [
  {
    title: 'Phone interview at Oragon ',
    date: 'on 6 May,2020 '
  },
  {
    title: 'Phone interview at Oragon ',
    date: 'on 6 May,2020 '
  }
];


const offer = [
  {
    title: 'Face-to-face interview at Oragon ',
    date: 'on 20 May,2020 '
  },
  {
    title: 'Face-to-face interview at Oragon ',
    date: 'on 20 May,2020 '
  }
];

const Interview = props => {
  const { className } = props;

  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
        >
          {phonescreen.map( (item, index) => (
            <Grid key={index} item xs={12} className={classes.row}>
              <div>
                <PhoneIcon className={classes.phonescreen} />
              </div>
              <div>
                <Typography>
                  {item.title}
                </Typography>
                <Typography className={classes.remain}>
                  {item.date}
                </Typography>
              </div>
            </Grid>
          ))}

          {offer.map( (item, index) => (
            <Grid key={index} item xs={12} className={classes.row}>
              <div>
                <PersonIcon className={classes.inperson} />
              </div>
              <div>
                <Typography>{item.title}</Typography>
                <Typography className={classes.remain}>
                  {item.date}
                </Typography>
              </div>
            </Grid>
          ))}
          
        </Grid>
      </CardContent>
    </Card>
  );
};

Interview.propTypes = {
  className: PropTypes.string
};

export default Interview;
