import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles (theme => ({
  badge: {
    width: '24px',
    height: '24px',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontSize: '14px',
    borderRadius: '50%',
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const MessageBadge = props => {
  const classes = useStyles();
  const { count } = props;

  return (
    <div className={classes.badge}>
      {count}
    </div>
  )
}

export default MessageBadge;