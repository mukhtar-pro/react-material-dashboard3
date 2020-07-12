import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Typography,
} from '@material-ui/core';

import { CustomInput } from 'components';

const useStyles = makeStyles((theme) => ({
  label: {
    color: '#BFC5D2',
    fontSize: '14px',
    marginTop: '15px'
  },
}))

const ContactInfo = () => {
  const classes = useStyles();

  return(
    <Grid container>
     <Grid item xs={12}>
        <Typography variant="h2">Contact Information</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.label}>Email</Typography>
        <CustomInput value="John@email.com"/>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.label}>LinkedIn</Typography>
        <CustomInput value="https://"/>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.label}>GitHub</Typography>
        <CustomInput value="https://"/>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.label}>Codepen</Typography>
        <CustomInput value="https://"/>
      </Grid>
    </Grid>
  )
};

export default ContactInfo;