import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Grid,
  Typography,
  Popover,
  Button
} from '@material-ui/core';

import {
  FilterList
} from '@material-ui/icons';

import { SearchInput, CustomButton } from 'components';

import PreCard from './PreCard';


const useStyles = makeStyles((theme) => ({
  root: {

  },
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  bubbling: {
    color: theme.palette.primary.main,
    fontSize: '40px',
    fontWeight: 'bold'
  },
  brief: {
    color: '#8798AD',
    fontSize: '18px',
    textTransform: 'uppercase',
    marginBottom: '24px'
  },
  icon: {
    width: '40px',
    height: '40px',
    margin: '0 20px',
    cursor: 'pointer'
  },
  dialog: {
    padding: '20px',
    width: '400px'
  },
  row1: {
    marginTop: '15px'
  },
  reset: {
    background: '#F1F3F4',
    borderRadius: '5px',
    color: theme.palette.primary.main,
    height: '25px'
  },
  nameFilter: {
    background: '#EEECFE',
    borderRadius: '5px',
    marginRight: '8px',
    textTransform: 'capitalize',
    height: '25px'
  },
  level: {
    background: 'rgba(92, 217, 216, 0.15)',
    borderRadius: '5px',
    marginRight: '8px',
    textTransform: 'capitalize',
    height: '25px'
  },
}))

const exNames = [
  "Loops", "Strings", "Lopps", "Strings"
];

const levels = [
  "Medium", "Easy", "Hard"
];

const contents = [
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
]

const PreChallenges = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.brief}>previous  challenges</Typography>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <SearchInput placeholder="Search by Name"/>
          <FilterList className={classes.icon} onClick={handleClick}/>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Grid container className={classes.dialog}>
              <Grid item xs={12} className={`${classes.row} ${classes.row1}`} style={{justifyContent: 'space-between'}}>
                <Typography className={classes.filterBy} variant="subtitle2">Filter by:</Typography>
                <Button className={classes.reset}>reset</Button>
              </Grid>
              <Grid item xs={12} className={classes.row1}>
                <Typography>Example name</Typography>
                <div className={classes.row}>
                  {exNames.map((label, index) => (
                    <Button key={index} className={classes.nameFilter}>{label}</Button>
                  ))}
                </div>
              </Grid>
              <Grid item xs={12} className={classes.row1}>
                <Typography>Level</Typography>
                <div className={classes.row}>
                  {levels.map((level, index) => (
                    <Button key={index} className={classes.level}>{level}</Button>
                  ))}
                </div>
              </Grid>
              <Grid item xs={12} className={classes.row1}>
                <CustomButton buttonLabel="Apply Filter"></CustomButton>
              </Grid>
            </Grid>
          </Popover>
        </Grid>
        <Grid item xs={12}>
          {contents.map((content, index) => (
            <PreCard key={index}/>
          ))}
        </Grid>
      </Grid>
    </div>
  )
};

export default PreChallenges;