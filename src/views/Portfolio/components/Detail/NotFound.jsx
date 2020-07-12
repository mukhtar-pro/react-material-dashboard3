import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Avatar,
  Typography,
  Dialog,
  Grid,
  Button
} from '@material-ui/core';

import { AttachFile } from '@material-ui/icons';

import { 
  CustomButton,
  CustomInput,
} from 'components';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '60px'
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    margin: '15px 0'
  },
  notFound: {
    width: '260px',
    height: '180px'
  },
  alert: {
    margin: '15px 0 25px 0',
    fontSize: '24px'
  },
  dialog1: {
    padding: '30px 60px',
    width: '400px'
  },
  label: {
    color: '#BFC5D2',
    fontSize: '14px',
    marginTop: '23px'
  },
  addApp: {
    width: '100%',
    height: '56px',
    marginTop: '23px',
    textTransform: 'capitalize',
    background: theme.palette.primary.main,
    borderRadius: '10px',
    fontSize: '18px'
  },
  fromChallenge: {
    fontSize: '16px',
    cursor: 'pointer',
    textDecorationLine: 'underline'
  }
}))

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog  onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={classes.dialog1}>
        <Typography variant="caption">Add New Project</Typography>
        <Grid item xs={12}>
          <Typography className={classes.label}>Name</Typography>
          <CustomInput />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.label}>Technologies</Typography>
          <CustomInput />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.label}>Link to hosted site</Typography>
          <CustomInput />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.label}>Link to code repository (optional)</Typography>
          <CustomInput />
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <AttachFile />
          <Typography>Upload Thumbnail</Typography>
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <Button className={classes.addApp}>Add Project</Button>
          <Typography style={{margin: '25px 0'}}>Or</Typography>
          <Typography className={classes.fromChallenge}>Add from your challenges </Typography>
        </Grid>
      </div>
    </Dialog>
  );
}

const NotFound = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false) ;

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <div className={classes.root}>
      <Avatar
        variant="square"
        src="./images/other/NotFound.svg"
        className={classes.notFound}
      >
      </Avatar>
      <Typography className={classes.alert}>No work added yet.</Typography>
      <div onClick={handleClickOpen}>
        <CustomButton buttonLabel="Add project" />
      </div>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  )
};

export default NotFound;