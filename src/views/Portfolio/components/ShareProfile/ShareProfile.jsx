import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
  Button
} from '@material-ui/core';

import {
  GitHub,
  LinkedIn,
  Mail
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '200px',
    boxShadow: '5.14419px 5.14419px 10.2884px rgba(144, 146, 152, 0.2)',
    borderRadius: '15px',
    border: '1px solid #F1F3F4'
  },
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  share: {
    width: '24px',
    height: '24px',
    marginRight: '10px'
  },
  sendMessage: {
    background: theme.palette.primary.main,
    margin: '20px 0',
    color: 'white',
    textTransform: 'capitalize',
    width: '160px',
    height: '45px',
    borderRadius: '10px'
  },
  wrap: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  social: {
    width: '24px',
    height: '24px'
  }
}))

const ShareProfile = () => {
  const classes = useStyles();

  return(
    <Card className={classes.card}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} className={classes.row}>
            <Avatar
              src="./images/other/Share.svg"
              className={classes.share}
            >
            </Avatar>
            <Typography>Share Profile</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.sendMessage}>Send Message</Button>
          </Grid>
          <Grid item xs={12} className={classes.wrap}>
            <Mail className={classes.social} style={{color: '#5CD9D8'}}/>
            <LinkedIn className={classes.social} style={{color: '#0077B7'}}/>
            <GitHub className={classes.social}/>
            <Avatar
              src="./images/other/Code.svg"
              className={classes.social}
            >
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
};

export default ShareProfile;