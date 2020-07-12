import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    width: '130px',
    height: '40px',
    background: '#5CD9D8',
    borderRadius: '10px',
    color: 'white',
    textTransform: 'capitalize'
  }
}))


const CustomButton = props => {
  const { buttonLabel, style } = props;
  const classes = useStyles();
  return(
    <Button className={classes.button} style={style}>{buttonLabel}</Button>
  )
};

export default CustomButton;