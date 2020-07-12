import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import {
  Typography,
  CardContent,
  Card,
} from '@material-ui/core';

const useStyles =  makeStyles((theme) => ({
  root:{
    boxShadow: '5.14419px 5.14419px 10.2884px rgba(144, 146, 152, 0.2)',
    borderRadius: '15px',
    marginTop: '16px',
    cursor: 'pointer'
  },
  duration: {
    fontSize: '12px',
    color: theme.palette.inperson.font,
    backgroundColor: theme.palette.inperson.background,
    width: '106px',
    borderRadius: '5px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15px',
  },
  name: {
    fontSize: '24px'
  }
}))

const PreCard = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const preChallenges = () => {
    let path = `/previouschallenge`
    if(location.pathname ===  '/currentchallenge') history.push(path);
  }
  return (
    <div>
      <Card className={classes.root} onClick={preChallenges}>
        <CardContent>
          <Typography className={classes.name}>Challenge name</Typography>
          <Typography className={classes.duration}>May 19 - May 30</Typography>
        </CardContent>
      </Card>
    </div>
  )
};

export default PreCard;