import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Grid,
  Dialog,
  Typography,
  Button
} from '@material-ui/core';

import {
  Person,
  Phone
} from '@material-ui/icons';

import { 
  CustomButton,
  CustomInput,
  DropDown,
  DateSelect
} from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid #F1F3F4',
    borderRadius: '15px',
    marginTop: '20px'
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    marginTop: '15px'
  },
  phonescreen: {
    color: theme.palette.phonescreen.font,
    borderRadius: '10px',
    backgroundColor: theme.palette.phonescreen.background,
    marginRight: '10px',
    width: '32px',
    height: '32px',
    padding: '7px'
  },
  inperson: {
    color: theme.palette.inperson.font,
    borderRadius: '10px',
    backgroundColor: theme.palette.inperson.background,
    marginRight: '10px',
    width: '32px',
    height: '32px',
    padding: '7px'
  },
  remain: {
    fontSize: '14px',
    color: '#8798AD',
    marginTop: '3px'
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
    title: 'Phone interview at John Joe ',
    date: 'on 6 May,2020 '
  },
];
 
const offer = [
  {
    title: 'Face-to-face interview with Jeremiah Hadub ',
    date: 'on 20 May,2020 '
  },
];

const stages = [
  "Step1",
  "Step2",
  "Step3",
]

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog  onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={classes.dialog1}>
        <Typography variant="caption">Add New Interview Step</Typography>
        <Grid item xs={12}>
          <Typography className={classes.label}>What stage of the interview are you at?</Typography>
          <DropDown inputLabel="Choose stage" items={stages}/>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.label}>Who are you interviewing with?</Typography>
          <CustomInput placeholder="John Doe"/>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.label}>When is the interview?</Typography>
          <DateSelect />
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.addApp}>Add Application</Button>
        </Grid>
      </div>
    </Dialog>
  );
}

const InterviewProcess = () => {
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
      <Typography variant="caption">Interview Process</Typography>
      {phonescreen.map( (item, index) => (
        <Grid key={index} item xs={12} className={classes.row}>
          <div>
            <Phone className={classes.phonescreen} />
          </div>
          <div>
            <Typography>
              {item.title}
            </Typography>
            <Typography className={classes.remain}>
              {item.date}
            </Typography>
          </div>
        </Grid>
      ))}

      {offer.map( (item, index) => (
        <Grid key={index} item xs={12} className={classes.row}>
          <div>
            <Person className={classes.inperson} />
          </div>
          <div>
            <Typography>{item.title}</Typography>
            <Typography className={classes.remain}>
              {item.date}
            </Typography>
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

export default InterviewProcess;