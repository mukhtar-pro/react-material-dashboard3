import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import {
  Grid, 
  Typography,
  Divider,
  TextField,
  Button
} from '@material-ui/core';

import {
  KeyboardBackspace
} from '@material-ui/icons';

import { Calendar, Interviews, DateSelect, CustomInput } from 'components';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  leftPanel: {
    background: 'white',
    padding: '20px 200px 30px 30px',
    borderRadius: '15px'
  },
  rightPanel: {
    padding: '36px',
    background: '#F9F9FF'
  },
  divider: {
    margin: '24px 0 24px 0',
    width: '100%'
  },
  
  textfield: {
    fontSize: '16px',
    border: '1px solid #E3E5E6',
    borderRadius: '5px',
    paddingLeft: '10px',
    width: '100%',
    minHeight: '72px',
    marginTop: '12px'
  },
  button: {
    background: theme.palette.primary.main,
    boxShadow: '0px 8px 16px rgba(8, 35, 48, 0.2)',
    borderRadius: '10px',
    width: '190px',
    height: '50px',
    textTransform: 'capitalize',
    margin: '25px auto',
    color: 'white'
  }
}))

const ShareApplication = props => {
  const classes = useStyles();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  return(
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={8} sm={7} xl={8} xs={12} className={classes.leftPanel}>
          <div className={classes.row} onClick={goBack}>
            <KeyboardBackspace style={{marginRight: '10px'}} />
            <Typography style={{cursor: 'pointer'}}>Back</Typography>
          </div>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h2">Share your experience about Disney</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">You application for</Typography>
              <CustomInput value="Front-End Engineer" style={{width: '90%'}}/>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Application date</Typography>
              <DateSelect />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Where was the interview?</Typography>
              <CustomInput placeholder="e,g., New York, NA" style={{width: '100%'}}/>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Discribe the Iterview Process*</Typography>
              <TextField
                className={classes.textfield}
                InputProps={{
                  disableUnderline: true
                }}
              />
            </Grid>
            <Divider className={classes.divider}/>
            <Grid item xs={12}>
              <Typography variant="h5">Interview Questions*</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textfield}
                placeholder="What were you asked about?"
                InputProps={{
                  disableUnderline: true
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textfield}
                placeholder="What did you answer?(Optional)"
                InputProps={{
                  disableUnderline: true
                }}
              />
            </Grid>
            <Grid item xs={12}  style={{textAlign: 'center'}}>
              <Button className={classes.button}>Submit</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} sm={5} xl={4} xs={12} className={classes.rightPanel}>
          <Calendar />
          <Interviews />
        </Grid>
      </Grid>
    </div>
  )
};

export default ShareApplication;