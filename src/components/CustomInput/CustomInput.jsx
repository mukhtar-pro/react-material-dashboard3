import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Input,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  input: {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.05px',
    border: '1px solid #E3E5E6',
    borderRadius: '5px',
    paddingLeft: '10px',
    width: '90%',
    minWidth: '200px',
    height: '40px'
  },
}))


const CustomInput = props => {
  const { placeholder, value, style } = props;
  const classes = useStyles();
  return(
    <Input
      disableUnderline
      className={classes.input}
      placeholder={placeholder}
      value={value}
      style={style}
    >
    </Input>
  )
};

export default CustomInput;