import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Grid,
  Typography,
  Avatar,
  Card,
  CardContent,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  row1: {
    margin: '15px 0'
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    padding: '0px !important',
    height: '112px',
    width: '100%',
  },
  wrap: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  medal: {
    height: 'auto',

  },
  collection: {
    width: '100%',
    height: '112px',
    borderRadius: '10px'
  },
  card: {
    margin: '10px 0',
    borderRadius: '10px',
  },
  avatar: {
    marginRight: '5px'
  },
  skill: {
    width: '50px',
    height: '25px',
    marginRight: '10px',
    backgroundColor: theme.palette.application.background,
    borderRadius: '5px',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const Ranking = props => {
  const classes = useStyles();
  const { ranking } = props;
  console.log(ranking);

  return(  
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Grid container>
          <Grid item xs={2} className={classes.wrap}>
            <Avatar
              src={ranking.medal}
              variant="square"
              className={classes.medal}
            >
            </Avatar>
          </Grid>
          <Grid item xs={6}>
            <div className={`${classes.row} ${classes.row1}`}>
              <Avatar
                src={ranking.avatar}
                className={classes.avatar}
              >
                {ranking.avatar}
              </Avatar>
              <Typography>{ranking.name}</Typography>
            </div>
            <div className={`${classes.row} ${classes.row1}`}>
              {ranking.skills.map((skill, index) => (
                <Typography key={index} className={classes.skill}>{skill}</Typography>
              ))}
            </div>
          </Grid>
          <Grid item xs={4}>
            <Avatar
              src={ranking.collection}
              variant="square"
              className={classes.collection}
            >
            </Avatar>
          </Grid>
        </Grid>
        <div></div>
      </CardContent>
    </Card>
  )
};

export default Ranking;