import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Grid
} from '@material-ui/core';
import CertificationCard from './CertificationCard';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '24px 30px 0 0'
  }
}))

const certifications = [
  {
    avatar: './images/other/Certification.svg',
    certName: 'Certification example name ',
    pubName: 'Microsoft',
    id: 'ID: 3242342423443',
    from: 'Issued: May,2020 ',
    to: 'Expiration: May,2023 '
  },
  {
    avatar: './images/other/Certification.svg',
    certName: 'Certification example name ',
    pubName: 'Microsoft',
    id: 'ID: 3242342423443',
    from: 'Issued: May,2020 ',
    to: 'Expiration: May,2023 '
  },
  {
    avatar: './images/other/Certification.svg',
    certName: 'Certification example name ',
    pubName: 'Microsoft',
    id: 'ID: 3242342423443',
    from: 'Issued: May,2020 ',
    to: 'Expiration: May,2023 '
  },
  {
    avatar: './images/other/Certification.svg',
    certName: 'Certification example name ',
    pubName: 'Microsoft',
    id: 'ID: 3242342423443',
    from: 'Issued: May,2020 ',
    to: 'Expiration: May,2023 '
  },
]

const Certification = () => {
  const classes = useStyles();
  return(
    <Grid container>
      {certifications.map((certification, index) => (
        <Grid item lg={6} sm={11} md={6} xs={11} key={index} className={classes.card}>
          <CertificationCard certification={certification}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default Certification;