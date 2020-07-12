import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import {
  Grid, 
  Typography,
  Avatar,
  Divider,
} from '@material-ui/core';

import {
  KeyboardBackspace,
  Share,
  InsertComment
} from '@material-ui/icons';

import InterviewProcess from './InterviewProcess';
import Contacts from './Contacts';
import OverviewDetail from './OverviewDetail';
import OverviewNotfound from './OverviewNotfound';


import { Calendar, Interviews, DropDown } from 'components';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  row1: {

  },
  leftPanel: {
    background: 'white',
    padding: '20px 50px 30px 25px',
    borderRadius: '15px',
    height: '1000px'
  },
  rightPanel: {
    padding: '36px',
    background: '#F9F9FF'
  },
  appCard: {
    width: '90px',
    height: '90px'
  },
  remain: {
    fontSize: '14px',
    color: '#8798AD',
    marginTop: '3px'
  },
  share: {
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center',
  },
  shareIcon: {
    padding: '3px',
    height: '24px',
    width: '24px',
    background: theme.palette.primary.main,
    color: 'white',
    borderRadius: '50%',
    marginRight: '6px'
  },
  shareDesc: {
    color: theme.palette.primary.main,
    cursor: 'pointer'
  },
  divider: {
    margin: '24px 0 24px 0'
  },
  comment: {
    color: theme.palette.primary.main,
    borderRadius: '10px',
    backgroundColor: theme.palette.background.card1,
    marginRight: '10px',
    width: '32px',
    height: '32px',
    padding: '7px'
  },
  role: {
    fontSize: '20px'
  },
  answer: {
    marginLeft: '25px',
    fontStyle: 'italic',
    fontSize: '16px',
    marginTop: '5px',
  }
}))

const userInfo = {
  position : 'Front-End Engineer',
  date: 'Applied on May 12, 2020'
}

const items = [
  "Most Recent",
  "M!",
  "M2"
]

const overviews = [
  {
    role: 'Front-End Engineer',
    date: '6 May, 2020 in Irvine, CA',
    items: [
      {
        title: 'Application',
        desc: 'The process took 2 weeks. I interviewed at Technossus (Irvine, CA) in May 2020.'
      },
      {
        title: 'Interview',
        desc: "3 round process. White Boarding in the second round and takes about 2 hours. 3rd round meet with a team lead with more white boarding and at this stage irrelevant tech questions related to the job. It's more a show from the tech lead who has a big ego and just wants to show off instead of seeing if you qualify. Last stage immature and irrelevant"
      },
      {
        title: 'Interview Questions',
        desc: 'Start off with some typical tech questions like interface or abstract class. Then rest of the questions irrelevant more of showing off.'
      }
    ],
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor'
  },
  {
    role: 'Front-End Engineer',
    date: '6 May, 2020 in Irvine, CA',
    items: [
      {
        title: 'Application',
        desc: 'The process took 2 weeks. I interviewed at Technossus (Irvine, CA) in May 2020.'
      },
      {
        title: 'Interview',
        desc: "3 round process. White Boarding in the second round and takes about 2 hours. 3rd round meet with a team lead with more white boarding and at this stage irrelevant tech questions related to the job. It's more a show from the tech lead who has a big ego and just wants to show off instead of seeing if you qualify. Last stage immature and irrelevant"
      },
      {
        title: 'Interview Questions',
        desc: 'Start off with some typical tech questions like interface or abstract class. Then rest of the questions irrelevant more of showing off.'
      }
    ],
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor'
  },
]

const ApplicationDetail = props => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const item = location.state;

  const goBack = () => {
    history.goBack();
  }

  const routerChange = () => {
    let path = `/shareapplication`; 
    history.push(path);
  }

  return(
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={8} sm={7} xl={8} xs={12} className={classes.leftPanel}>
          <div className={classes.row} onClick={goBack}>
            <KeyboardBackspace style={{marginRight: '10px'}} />
            <Typography style={{cursor: 'pointer'}}>Back</Typography>
          </div>
          <Grid container className={classes.row} style={{marginTop: '24px'}}>
            <Grid item lg={6} sm={6} xl={6} xs={12} className={classes.row}>
              <div>
                <Avatar
                  className={classes.appCard}
                  variant="rounded"
                  src={item.logoUrl}
                >
                  {item.logoUrl}
                </Avatar>
              </div>
              <div style={{marginLeft: '16px'}}>
                <Typography variant="h2">{item.title}</Typography>
                <Typography variant="h3">{userInfo.position}</Typography>
                <Typography className={classes.remain}>
                  {userInfo.date}
                </Typography>
              </div>
            </Grid>
            <Grid item lg={6} sm={6} xl={6} xs={12} className={classes.share}>
              <Share className={classes.shareIcon}/>
              <Typography className={classes.shareDesc} onClick={() => routerChange()}>Share Your Experience</Typography>
            </Grid>
          </Grid>
          <Divider className={classes.divider}/>
          <Grid container>
            <Grid item xs={6}>
              <InterviewProcess />
            </Grid>
            <Divider orientation="vertical" flexItem style={{margin: '0 10px'}}/>
            <Grid item xs={5}>
              <Contacts />
            </Grid>
          </Grid>
          <Divider className={classes.divider}/>
          <Grid container>
            <Grid item xs={12} className={classes.row} style={{justifyContent: 'space-between'}}>
              <div className={classes.row} >
                <InsertComment className={classes.comment}/>
                <Typography variant="caption">Company overview</Typography>
              </div>
              <DropDown inputLabel="Sort By" items={items} style={{border: 'none', width: '150px'}}/>
            </Grid>
            {/* <OverviewDetail overviews={overviews} /> */}
            <OverviewNotfound />
          </Grid>
        </Grid>
        <Grid item lg={4} sm={5} xl={4} xs={12} className={classes.rightPanel}>
          <Calendar />
          <Interviews />
        </Grid>
      </Grid>
    </div>
  )
};

export default ApplicationDetail;