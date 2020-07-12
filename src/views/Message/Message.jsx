import React from 'react';

import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Typography,
  Avatar,
  Divider,
  Paper,
  Input,
  TextField ,
  InputAdornment
} from '@material-ui/core';

import { AttachFile, Telegram, Search, Close } from '@material-ui/icons';
import { MessageBadge } from 'components';

const useStyles = makeStyles ( theme => ({
  root: {
    marginTop: '20px'
  },
  wrap: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px'
  },
  channels: {
    overflowY: 'scroll',
    height: '900px',
    paddingRight: '10px',
  },
  card: {
    background: '#F9F9FF',
    borderRadius: '10px',
    marginTop: '15px',
    padding: '10px',
    cursor: 'pointer',
    border: '1px solid #E3E5E6'
  },
  teleIcon: {
    backgroundColor: '#5CD9D8',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  innerIcon: {
    width: '15px',
    height: '15px',
    color: 'white'
  },
  name: {
    color: '#2E384D',
    fontSize: '15px'
  },
  message: {
    color: '#8798AD',
    fontSize: '12px',
    marginTop: '5px'
  },
  avatar: {
    width: '40px',
    height: '40px'
  },
  date: {
    fontSize: '8px',
    color: '#8798AD',
    marginBottom: '10px',
    textAlign: 'end'
  },
  badge: {
    width: '18px',
    height: '18px',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '50%',
    textAlign: 'center',
    marginLeft: 'auto'
  },
  logs: {
    background: '#F9F9FF',
    border: '1px solid #E3E5E6',
    borderRadius: '15px',
    margin: '0 auto 20px auto',
    paddingBottom: '20px',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between'
  },
  channelName: {
    padding: '15px',
    textAlign: 'center'
  },
  channelDate: {
    color: '#8798AD',
    textAlign: 'center',
    width: '100px',
    margin: '15px auto',
    background: '#FFFFFF',
    border: '1px solid #F1F3F4',
    borderRadius: '15px'
  },
  logLeft: {
    display: 'flex',
  },
  logRight: {
    display: 'flex',
  },
  nameRight: {
    textAlign: 'right'
  },
  wrapAvatar: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-end',
    margin: '0 10px'
  },
  logName: {
    color: '#8097B1',
    fontSize: '14px'
  },
  logArea: {
  },
  time: {
    textAlign: 'right',
    color: '#8097B1',
    fontSize: '11px'
  },
  bubble: {
    padding: '15px',
    borderRadius: '17px'
  },
  bubbleLeft: {
    background: '#FFFFFF'
  },
  bubbleRight: {
    background: theme.palette.primary.main,
  },
  cardLog: {
    marginBottom: '20px'
  },
  inputWrap: {
    borderRadius: '4px',
    alignItems: 'center',
    padding: theme.spacing(1),
    display: 'flex',
    border: '1px solid #E3E5E6',
    bordeRadius: '5px',
    height: '40px',
    margin: '0 24px'
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
  },
  newMessage: {
    fontSize: '24px'
  }
}))

const users = [
  {
    avatarUrl: 'images/avatars/Jacob Cooper.svg',
    name: 'Jacob Cooper',
    message: 'Thank you very much!!!',
    date: 'May 19',
    newMessage: '1'
  },
  {
    avatarUrl: 'images/avatars/Example.svg',
    name: 'Example name cohort',
    message: 'It’s so easy? Thank you team! I love you! How you...',
    date: 'May 19',
    newMessage: '3'
  },
  {
    avatarUrl: 'images/avatars/Jerome Black.svg',
    name: 'Jerome Black',
    message: 'Thank you very much!!!',
    date: 'May 19',
  },
  {
    avatarUrl: 'images/avatars/Arlene Fisher.svg',
    name: 'Arlene Fisher',
    message: 'It’s so easy? Thank you team! I love you! How you...',
    date: 'May 19',
  },
  {
    avatarUrl: 'images/avatars/Regina Henry.svg',
    name: 'Regina Henry',
    message: 'Thank you very much!!!',
    date: 'May 19',
  },
  {
    avatarUrl: 'images/avatars/Example.svg',
    name: 'Example name cohort',
    message: 'It’s so easy? Thank you team! I love you! How you...',
    date: 'May 19',
  },
  {
    avatarUrl: 'images/avatars/Example.svg',
    name: 'Jacob Cooper',
    message: 'Thank you very much!!!',
    date: 'May 19',
  },
  {
    avatarUrl: 'images/avatars/Example.svg',
    name: 'Example name cohort',
    message: 'It’s so easy? Thank you team! I love you! How you...',
    date: 'May 19',
  },
  {
    avatarUrl: 'images/avatars/Example.svg',
    name: 'Jacob Cooper',
    message: 'Thank you very much!!!',
    date: 'May 19',
  },
  {
    avatarUrl: 'images/avatars/Arlene Fox.svg',
    name: 'Arlene Fox',
    message: 'It’s so easy? Thank you team! I love you! How you...',
    date: 'May 19',
  },
  {
    avatarUrl: 'images/avatars/Jerome Black.svg',
    name: 'Jerome Black',
    message: 'Thank you very much!!!',
    date: 'May 19',
  },
  {
    avatarUrl: 'images/avatars/Example.svg',
    name: 'Example name cohort',
    message: 'It’s so easy? Thank you team! I love you! How you...',
    date: 'May 19',
  }
]

const logs = [
  {
    name: 'Arelene',
    message: 'Hi, I’m having an interview with Google tomorrow, and I’m very afraid to fail.',
    time: '18:54',
    avatarUrl: 'images/avatars/Arlene Fox.svg',
    host: false
  },
  {
    name: 'John',
    message: 'Hello Arelene, Don’t worry, you will succeed. You are well prepared. Just do it!',
    time: '18:54',
    avatarUrl: 'images/avatars/John Doe.svg',
    host: true
  },
  {
    name: 'Arelene',
    message: 'Thanks for the support. I will do it!',
    time: '18:54',
    avatarUrl: 'images/avatars/Arlene Fox.svg',
    host: false
  }
]

const Message = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={4} sm={6} xl={4} xs={12} >
          {open && (
            <div className={classes.wrap}>
            <Typography className={classes.newMessage}>Send new message for</Typography>
            </div>
          )}
          <div className={classes.wrap}>
            <TextField
              className={classes.input}
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            <div className={classes.teleIcon} >
              {!open && (
                <Telegram className={classes.innerIcon} onClick={handleClickOpen}/>
              )}
              {open && (
                <Close className={classes.innerIcon} onClick={handleClose}/>
              )}
            </div>
          </div>
          <div className={classes.channels}>
          {users.map((user, index) => (

            <Grid container key={index} className={classes.card}>
              <Grid item xs={12} className={classes.date}>
                {user.date}
              </Grid>
              <Grid item xs={2}>
                <Avatar
                  className={classes.avatar}
                  src={user.avatarUrl}
                >
                  {user.name}
                </Avatar>
              </Grid>
              <Grid item xs={10}>
                <Grid item xs={12} className={classes.name}>
                  {user.name}
                </Grid>
                <div className={classes.wrap}>
                  <Grid item xs={10} className={classes.message}>
                    {user.message}
                  </Grid>
                  {user.newMessage && (
                    <Grid item xs={2}>
                      <MessageBadge count={user.newMessage} />
                    {/* <div className={classes.badge}>
                      {user.newMessage}
                    </div> */}
                    </Grid>
                  )}
                </div>
              </Grid>
            </Grid>
          ))}
          </div>
        </Grid>
        <Grid item lg={7} sm={5} xl={7} xs={11} className={classes.logs}>
          <div>
            <Typography variant="h4" className={classes.channelName}>Arlene Fisher</Typography>
            <Divider />
            <Typography className={classes.channelDate}>May 19</Typography>
          </div>
          <div>
            <div className={classes.logArea}>
              {logs.map((log, index) => (
                <div key={index}>
                  {log.host && (
                    <Grid container className={classes.cardLog}>
                      <Grid item xs={5}>

                      </Grid>
                      <Grid item xs={7} className={classes.logRight}>
                        <div>
                          <Typography className={`${classes.logName} ${classes.nameRight}`}>{log.name}</Typography>
                          <div className={`${classes.bubbleRight} ${classes.bubble}`}>
                            <Typography style={{color: '#FFFFFF'}}>{log.message}</Typography>
                            <Typography className={classes.time}  style={{color: '#E4E8F0'}}>{log.time}</Typography>
                          </div>
                        </div>
                        <div className={classes.wrapAvatar}>
                          <Avatar
                            className={classes.avatar}
                            src={log.avatarUrl}
                          >
                            {log.name}
                          </Avatar>
                        </div>
                      </Grid>
                    </Grid>
                  )}
                  {!log.host && (
                    <Grid container className={classes.cardLog}>         
                      <Grid item xs={9} className={classes.logLeft}>
                        <div className={classes.wrapAvatar}>
                          <Avatar
                            className={classes.avatar}
                            src={log.avatarUrl}
                          >
                            {log.name}
                          </Avatar>
                        </div>
                        <div>
                          <Typography className={classes.logName}>{log.name}</Typography>
                          <div className={`${classes.bubbleLeft} ${classes.bubble}`}>
                            <Typography>{log.message}</Typography>
                            {/* <Typography>{log.message}</Typography> */}
                            <Typography className={classes.time}>{log.time}</Typography>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={3}>

                      </Grid>
                    </Grid>
                  )}
                </div>
              ))}
            </div>
            <div>
              
              <Paper
                className={classes.inputWrap}
              >
                <Input
                  className={classes.input}
                  disableUnderline
                  placeholder="Type a text message..."
                />
                <AttachFile className={classes.icon} />
                <div className={classes.teleIcon}>
                  <Telegram className={classes.innerIcon}/>
                </div>
              </Paper>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Message;