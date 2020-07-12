import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    width: '100%',
    height: '600px',
    overflowY: 'scroll'
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    margin: '20px 0 10px 0'
  },
  avatar: {
    width: '32px',
    height: '32px',
    marginRight: '5px'
  },
  remain: {
    fontSize: '14px',
    color: '#8798AD',
    marginTop: '3px'
  },
}))

const item = {
  logoUrl: '/images/logos/Rocket.svg',
  title: 'Rocket'
}

const AppStatus = props => {
  const { statusList } = props;
  const classes = useStyles();
  const history = useHistory();

  const routerChange = () => {
    console.log("aaa");
    let path = `/applicationdetail`;
    history.push({pathname: path, state: item});
  };

  return(
    <div className={classes.root} onClick={routerChange}>
      {statusList.map((item, index) => (
        <div key={index}>
          <Grid key={index} item xs={12} className={classes.row}>
            <div>
              <Avatar
                className={classes.avatar}
                src={item.avatarUrl}
              >
                {item.avatarUrl}
              </Avatar>
            </div>
            <div>
              <span className={item.status}>{item.status}</span>
              <span>{item.description}</span>
              <Typography className={classes.remain}>
                {item.deadLine}
              </Typography>
            </div>
          </Grid>
          <Divider />
        </div>
      ))}
    </div>
  )
};

export default AppStatus;