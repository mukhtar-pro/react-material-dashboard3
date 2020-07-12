import React from 'react';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    borderRadius: '5px',
    // border: '1px solid #2E384D',
    height: '40px',
    textTransform: 'capitalize'
  },
  allButton: {
    backgroundColor: theme.palette.primary.main,
  },
  aButton: {
    border: '1px solid #2E384D',
    marginLeft: '16px'
  },
  todoButton: {
    borderRadius: '10px',
    backgroundColor: theme.palette.primary.main,
    fontWeight: '500',
    fontSize: '15px',
    color: 'white',
    width: '180px',
    height: '50px',
    marginLeft: 'auto'
  }
}));

// const items = [
//   'name1',
//   'name2',
//   'name3'
// ]

const UsersToolbar = props => {

  const classes = useStyles();
  // const history = useHistory();

  // const routerChange = () => {
  //   let path = `/todocreate`; 
  //   history.push(path);
  // }

  return (
    <div className={classes.root}>
      {/* <DropDown
        items={items}
        inputLabel="Cohort name"
      /> */}
      <Button className={`${classes.button} ${classes.allButton}`}>All</Button>
      <Button className={`${classes.button} ${classes.aButton}`}>New</Button>
      <Button className={`${classes.button} ${classes.aButton}`}>Active</Button>
      <Button className={`${classes.button} ${classes.aButton}`}>Complete</Button>
      {/* <Button className={`${classes.button} ${classes.todoButton}`} onClick={routerChange}>Creat To Do List</Button> */}
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;
