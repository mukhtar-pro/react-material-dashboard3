import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Divider,
  Button
} from '@material-ui/core';

import GeneralInfo from './GeneralInfo';
import ContactInfo from './ContactInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FFFFFF',
    border: '1px solid #F1F3F4',
    boxSizing: 'border-box',
    borderRadius: '15px',
    padding: '32px',
    height: '1080px'
  },
  divider: {
    margin: '24px 0'
  },
  wrap: {
    display: 'flex',
    paddingTop: '45px',
    justifyContent: 'center'
  },
  button: {
    width: '190px',
    height: '55px',
    background: theme.palette.primary.main,
    color: '#FFFFFF',
    borderRadius: '10px'
  }
}))

const EditPortfolio = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <GeneralInfo />
      <Divider className={classes.divider}/>
      <ContactInfo />
      <div className={classes.wrap}>
        <Button className={classes.button}>Save Changes</Button>
      </div>
    </div>
  )
};

export default EditPortfolio;