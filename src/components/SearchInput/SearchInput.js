import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Paper, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '4px',
    alignItems: 'center',
    padding: theme.spacing(1),
    display: 'flex',
    flexBasis: 420,
    border: '1px solid #8798AD',
    bordeRadius: '5px',
    height: '40px',
    // width: '500px'
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  input: {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.05px',
  }
}));

const SearchInput = props => {
  const { className, onChange, placeholder } = props;

  const classes = useStyles();

  return (
    <Paper
      className={clsx(classes.root, className)}
    >
      <Input
        className={classes.input}
        disableUnderline
        onChange={onChange}
        placeholder={placeholder}
      />
      <SearchIcon className={classes.icon} />
    </Paper>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object
};

export default SearchInput;
