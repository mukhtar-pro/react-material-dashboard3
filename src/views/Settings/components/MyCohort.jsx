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
  Dialog,
  Input,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

import { DropDown, DateSelect } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '24px',
  },
  newButton: {
    width: '200px',
    height: '50px',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '10px',
    textTransform: 'capitalize',
    marginBottom: '20px'
  },
  card: {
    backgroundColor: '#F9F9FF'
  },
  mycohort: {
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '5.14419px 5.14419px 10.2884px rgba(144, 146, 152, 0.2)',
    paddingBottom: '10px'
  },
  row: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-between',
    marginBottom: '15px'
  },
  title: {
    margin: '27px 0 0 10px',
    fontSize: '19px'
  },
  name: {
    marginLeft: '10px',
    fontSize: '15px'
  },
  count: {
    marginRigth: '10px',
    color: '#8798AD',
    marginRight: '10px'
  },

  dialog1: {
    padding: '30px 60px'
  },
  dialogTitle: {
    fontSize: '24px',
    textAlign: 'center'
  },
  input: {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.05px',
    border: '1px solid #E3E5E6',
    borderRadius: '5px',
    paddingLeft: '10px',
    width: '300px',
    height: '40px'
  },
  label: {
    color: '#BFC5D2',
    fontSize: '14px',
    marginTop: '15px',
  },
  addCohort: {
    background: theme.palette.primary.main,
    borderRadius: '10px',
    width: '250px',
    height: '45px',
    marginTop: '15px',
    textTransform: 'capitalize',
    color: 'white',
    fontSize: '18px'
  }
}));

const students = [
  {name: 'Example name cohort', count: '6 student’s'},
  {name: 'Example name cohort', count: '12 student’s'},
  {name: 'Example name cohort', count: '6 student’s'},
  {name: 'Example name cohort', count: '8 student’s'},
  {name: 'Example name cohort', count: '4 student’s'},
  {name: 'Example name cohort', count: '10 student’s'},
  {name: 'Example name cohort', count: '6 student’s'},
  {name: 'Example name cohort', count: '6 student’s'},
];

const items = [
  'name1',
  'name2',
  'name3',
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
        <Typography id="simple-dialog-title" className={classes.dialogTitle}>Add New Cohort</Typography>
        <Grid container style={{marginTop: '15px'}}>
          <Grid item xs={12}>
            <Grid item xs={12} className={classes.label}>
              Cohort Name
            </Grid>
            <Grid item xs={12}>
              <Input
                disableUnderline
                className={classes.input}
              >
              </Input>
            </Grid>

            <Grid item xs={12} className={classes.label}>
              Start Date
            </Grid>
            <Grid item xs={12}>
              <DateSelect style={{marginRight: '0px'}} className={classes.dateSel}/>
            </Grid>

            <Grid item xs={12} className={classes.label}>
              End Date
            </Grid>
            <Grid item xs={12}>
              <DateSelect style={{marginRight: '0px'}}  className={classes.dateSel}/>
            </Grid>
            
            <Grid item xs={12} style={{textAlign: 'right'}}>
              <FormControlLabel
                control={<Checkbox color="primary" name="checkedA" />}
                label="Make Default Cohort"
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12} style={{textAlign: 'center'}}>
              <Button className={classes.addCohort}>Add Cohort</Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
}

const MyCohort = props => {
  const { className } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // width: 400px;
  // padding: 10px 40px 3px 40px;
  return (
    <div className={clsx(classes.root, className)}>
      <Grid item xs={12}>
        <Button className={classes.newButton} onClick={handleClickOpen}>Create  New Cohort</Button>
        <SimpleDialog style={{width: '400px'}} open={open} onClose={handleClose} />
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.card}
        >
          <CardContent>
            <Grid className={classes.mycohort}>
              <div className={classes.row}>
                <Typography className={classes.title}>My Cohort</Typography>
                
                <DropDown
                  items={items}
                  inputLabel="Sort by Name"
                />
              </div>
              {students.map((item, index) => (
                <div key={index} className={classes.row}>
                  <Typography className={classes.name}>{item.name}</Typography>
                  <Typography className={classes.count}>{item.count}</Typography>
                </div>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

MyCohort.propTypes = {
  className: PropTypes.string
};

export default MyCohort;
