import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import {
  Grid,
  Typography,
  CardContent,
  Card,
  Button,
  Avatar,
  Dialog
} from '@material-ui/core';

import {
  AttachFile
} from '@material-ui/icons';

import { CustomInput } from 'components';
import { HeadBubbling } from '../HeadBubbling';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    borderRadius: '10px',
    background: theme.palette.primary.main,
    fontSize: '16px',
    width: '160px',
    height: '45px',
    textTransform: 'capitalize',
    marginTop: '40px'
  },
  card: {
    minWidth: '300px',
    width: '70%',
    margin: '0 auto',
    borderRadius: '15px',
    background: '#E7F9F9',
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  problemSolve: {
    width: '140px',
    height: '140px'
  },
  dialog1: {
    padding: '30px 60px'
  },
  label: {
    color: '#BFC5D2',
    fontSize: '14px',
    marginTop: '23px'
  },
  subChallenges: {
    width: '100%',
    height: '56px',
    marginTop: '23px',
    textTransform: 'capitalize',
    background: theme.palette.primary.main,
    borderRadius: '10px',
    fontSize: '18px'
  }
}));

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const history = useHistory();

  const routerChange = () => {
    let path = `/currentchallenge`; 
    history.push(path);
  }

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog  onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={classes.dialog1}>
        <Typography variant="caption">Add New Contact</Typography>
        <Grid item xs={12}>
          <Typography className={classes.label}>Link to hosted site</Typography>
          <CustomInput />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.label}>Link to code repository (optional)</Typography>
          <CustomInput />
        </Grid>
        <Grid item xs={12} className={classes.row} style={{marginTop: '15px'}}>
          <AttachFile />
          <Typography>Upload Thumbnail</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.subChallenges} onClick={routerChange}>Add Contact</Button>
        </Grid>
      </div>
    </Dialog>
  );
}

const Bubbling = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false) ;
  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }
  return(
    <div className={classes.root}>
      <Grid container>
        <HeadBubbling></HeadBubbling>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <div>
                <Typography>YOUR CHALLENGE:</Typography>
                <Typography>Create an animation involving bubbles</Typography>
                <Button className={classes.button} onClick={handleClick}>Submit Challenge</Button>
              </div>
              <Avatar
                className={classes.problemSolve}
                variant="rounded"
                src='./images/other/ProblemSolve.svg'
              >
                ProblemSolve
              </Avatar>
              <SimpleDialog style={{width: '430px'}} open={open} onClose={handleClose} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
};

export default Bubbling;