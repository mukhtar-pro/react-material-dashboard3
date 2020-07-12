import React from 'react';

import {
  Grid,
} from '@material-ui/core';

import Header from './Header';
import Medals from './Medals';

const Biography = () => {
  return(
    <Grid container>
      <Grid item lg={9} sm={12} xl={9} xs={12}>
        <Header />
      </Grid>
      <Grid item lg={3} sm={12} xl={3} xs={12}>
        <Medals />
      </Grid>
    </Grid>
  )
};

export default Biography;