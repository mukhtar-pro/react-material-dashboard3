import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Avatar,
  Typography,
  Button
} from '@material-ui/core';

import { CheckCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    width: '100px',
    height: '100px'
  },
  badge: {
    fontSize: '12px',
    color: '#2E384D',
    backgroundColor: theme.palette.phonescreen.background,
    width: '50px',
    borderRadius: '5px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
  },
  profile: {
    background: theme.palette.application.background,
    color: theme.palette.application.font,
    borderRadius: '5px',
    fontSize: '12px',
  },
  checkIcon: {
    marginLeft: '10px',
    color: theme.palette.primary.main,
    width: '23px',
    height: '23px'
  }
}))

const profile = {
  avatar: './images/avatars/John Doe.svg',
  name: 'John Doe',
  position: 'Backend Developer',
  skills: [
    "Java", "CSS", "HTML", "Python", "Ruby", "Java", "CSS"
  ]
}

const Header = () => {
  const classes = useStyles();
  return(
    <div className={classes.row}>
      <div className={classes.row}>
        <Avatar
          className={classes.avatar}
          variant="rounded"
          src={profile.avatar}
        >
          {profile.logoUrl}
        </Avatar>
      </div>
      <div style={{marginLeft: '16px'}}>
        <div className={classes.row} style={{justifyContent: 'space-between'}}>
          <div className={classes.row}>
            <Typography variant="h2">{profile.name}</Typography>
            <CheckCircle className={classes.checkIcon}/>
          </div>
          <Button className={classes.profile}>Full Time</Button>
        </div>
        <Typography variant="h3" style={{color: '#8798AD'}}>{profile.position}</Typography>
        <div className={classes.row}>
          {profile.skills.map((skill, index) => (
            <Typography key={index} className={classes.badge}>{skill}</Typography>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Header;