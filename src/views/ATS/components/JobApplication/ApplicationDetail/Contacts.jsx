import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Grid,
  Dialog,
  Typography,
  Button
} from '@material-ui/core';

import {
  LinkedIn,
  Mail
} from '@material-ui/icons';

import { CustomButton, CustomInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid #F1F3F4',
    borderRadius: '15px',
    marginTop: '20px'
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    marginTop: '15px',
    justifyContent: 'space-between'
  },
  mail: {
    width: '24px',
    height: '24px',
    color: theme.palette.primary.main,
    marginLeft: '16px'
  },
  linkedin: {
    width: '24px',
    height: '24px',
    color: '#0077B7',
    marginLeft: '16px'
  },
  remain: {
    fontSize: '14px',
    color: '#8798AD',
    marginTop: '3px',
  },
  wrap: {
    textAlign: 'right',
    width: '100%'
  },
  
  dialog1: {
    padding: '30px 60px'
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
  }
}));

const phonescreen = [
  {
    title: 'Taylor Rose ',
    position: 'Senior UI Expert '
  },
];
 
const offer = [
  {
    title: 'Jade Pricen ',
    position: 'Senior Manager '
  },
];

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog  onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={classes.dialog1}>
        <Typography variant="caption">Add New Contact</Typography>
        <Grid item xs={12}>
          <Typography className={classes.label}>Name</Typography>
          <CustomInput placeholder="John Doe"/>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.label}>Title</Typography>
          <CustomInput placeholder="Senior Engineer"/>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.label}>Email Address</Typography>
          <CustomInput placeholder="John@email.com"/>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.label}>LinkedIn</Typography>
          <CustomInput placeholder="https://"/>
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.addApp}>Add Contact</Button>
        </Grid>
      </div>
    </Dialog>
  );
}

const Contacts = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false) ;
  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };
  return(
    <Grid
      container
    >
      <Typography variant="caption">Contacts</Typography>
      {phonescreen.map( (item, index) => (
        <Grid key={index} item xs={12} className={classes.row}>
          <div>
            <Typography>
              {item.title}
            </Typography>
            <Typography className={classes.remain}>
              {item.position}
            </Typography>
          </div>
          <div>
            <Mail className={classes.mail} />
            <LinkedIn className={classes.linkedin} />
          </div>
        </Grid>
      ))}

      {offer.map( (item, index) => (
        <Grid key={index} item xs={12} className={classes.row}>
          <div>
            <Typography>{item.title}</Typography>
            <Typography className={classes.remain}>
              {item.position}
            </Typography>
          </div>
          <div>
            <Mail className={classes.mail} />
            <LinkedIn className={classes.linkedin} />
          </div>
        </Grid>
      ))}
      <div onClick={handleClickOpen} className={classes.wrap}>
        <CustomButton buttonLabel="Add New" style={{marginTop: '27px'}}/>
      </div>
      <SimpleDialog style={{width: '430px'}} open={open} onClose={handleClose} />
    </Grid>
  )
};

export default Contacts;