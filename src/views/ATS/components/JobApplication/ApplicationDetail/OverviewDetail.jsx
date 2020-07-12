import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Grid, 
  Typography,
  Divider,
} from '@material-ui/core';

import {
  SubdirectoryArrowRight
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '500px',
    overflowY: 'scroll'
  },
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  remain: {
    fontSize: '14px',
    color: '#8798AD',
    marginTop: '3px'
  },
  shareDesc: {
    color: theme.palette.primary.main,
    cursor: 'pointer'
  },
  divider: {
    margin: '24px 0 24px 0'
  },
  role: {
    fontSize: '20px'
  },
  answer: {
    marginLeft: '25px',
    fontStyle: 'italic',
    fontSize: '16px',
    marginTop: '5px',
  },
  desc: {
    color: '#2E384D'
  }
}))

const OverviewDetail = props => {
  const classes = useStyles();
  const { overviews } = props;
  
  const [open, setOpen] = React.useState(false);

  const switchAnswer = () => {
    setOpen(!open);
    console.log(open);
  }
  return(
    <div className={classes.root}>
      {overviews.map((item, index) => (
        <Grid container key={index}>
          <Grid item xs={12} >
            <Typography className={classes.role}>{item.role}</Typography>
            <Typography className={classes.remain}>{item.date}</Typography>
          </Grid>
          {item.items.map((data, index) => (
            <Grid item xs={12} key={index}>
              <Typography variant="subtitle1">{data.title}</Typography>
              <Typography variant="subtitle2" className={classes.desc}>{data.desc}</Typography>
            </Grid>
          ))}
          <Grid item xs={12} className={classes.row}>
            <SubdirectoryArrowRight />
            <Typography className={classes.shareDesc} onClick={switchAnswer}>Show Answer</Typography>
          </Grid>
          {open && (
            <Typography className={classes.answer}>{item.answer}</Typography>
          )}
          <Divider className={classes.divider} style={{width: '100%'}}/>
        </Grid>
      ))}
    </div>
  )
};

export default OverviewDetail;