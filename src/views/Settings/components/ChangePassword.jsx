import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { 
  Card, 
  CardContent, 
  Grid, 
  Button,
  Typography,
  Input,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '24px',
    height: '250px',
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
    paddingLeft: '10px',
    width: '90%'
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
  }
}));

const ChangePassword = props => {
  const { className } = props;

  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.profile}>Change Password</Typography>
          </Grid>
          
          <Grid container style={{marginTop: '15px'}}>
            <Grid item xs={12}>
              <Grid item xs={12} className={classes.name}>
                Current Password
              </Grid>
              <Grid item xs={12}>
                <Input
                  disableUnderline
                  className={classes.input}
                >
                </Input>
              </Grid>
              <Grid item xs={12} className={classes.name}>
                New Password
              </Grid>
              <Grid item xs={12}>
                <Input
                  disableUnderline
                  className={classes.input}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button className={classes.button}>Change Password</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ChangePassword.propTypes = {
  className: PropTypes.string
};

export default ChangePassword;
