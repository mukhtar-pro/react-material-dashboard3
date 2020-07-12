import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { 
  Card, 
  CardContent, 
  Grid, 
  Button,
  Avatar,
  Typography,
  Input,
  Badge,
} from '@material-ui/core';

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '24px',
    height: '240px',
    border: '1px solid #E3E5E6',
    borderRadius: '15px'
  },
  profile: {
    fontSize: '20px',
    color: '#2E384D',
  },
  input: {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.05px',
    border: '1px solid #E3E5E6',
    borderRadius: '5px',
    width: '90%',
    height: '40px',
    paddingLeft: '16px'
  },
  name: {
    color: '#BFC5D2',
    fontSize: '14px',
    marginTop: '8px',
  },
  button: {
    background: theme.palette.primary.main,
    color: 'white',
    borderRadius: '10px',
    textTransform: 'capitalize',
    fontSize: '18px',
    fontWeight: '500',
    float: 'right',
    marginTop: '10px'
  },
  avatar: {
    width: '120px',
    height: '120px'
  },
  editIcon: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '50%',
  }
}));

const profileData = {
  'avatarUrl': './images/avatars/avatar.svg',
  'name': 'John Doe',
  'title': 'Example Title'
}

const ProfileSetting = props => {
  const { className } = props;

  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.profile}>Profile Setting</Typography>
          </Grid>
          
          <Grid container style={{marginTop: '15px'}}>
            <Grid item xs={5} md={3}>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<EditOutlinedIcon className={classes.editIcon} />}
              >
                <Avatar alt="Travis Howard" className={classes.avatar} src="./images/avatars/avatar.svg" />
              </Badge>
            </Grid>
            <Grid item xs={6} md={8} style={{marginLeft: '20px'}}>
              <Grid item xs={12} className={classes.name}>
                Your Name
              </Grid>
              <Grid item xs={12}>
                <Input
                  disableUnderline
                  className={classes.input}
                  value={profileData.name} 
                >
                </Input>
              </Grid>
              <Grid item xs={12} className={classes.name}>
                Title
              </Grid>
              <Grid item xs={12}>
                <Input
                  disableUnderline
                  className={classes.input}
                  value={profileData.title} 
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button className={classes.button}>Save Changes</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ProfileSetting.propTypes = {
  className: PropTypes.string
};

export default ProfileSetting;
