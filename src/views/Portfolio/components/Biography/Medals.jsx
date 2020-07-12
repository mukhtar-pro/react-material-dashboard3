import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Grid,
  Typography,
  Avatar
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  medal: {
    margin: '5px',
    height: '100%'
  }
}))

const medals = [
  {
    medal: './images/other/Gold.svg',
    count: '3'
  },
  {
    medal: './images/other/Silver.svg',
    count: '14'
  },
  {
    medal: './images/other/Copper.svg',
    count: '8'
  },
]

const Medals = () => {
  const classes = useStyles();
  return(
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="subtitle2" style={{color: '#8798AD'}}>Сhallenge Rewards</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          {medals.map((medal, index) => (
                <Avatar
                  key={index}
                  src={medal.medal}
                  className={classes.medal}
                >
                </Avatar>
              // <Typography></Typography>
          ))}
          
        </Grid>
      </Grid>
    </Grid>
  )
};

export default Medals;