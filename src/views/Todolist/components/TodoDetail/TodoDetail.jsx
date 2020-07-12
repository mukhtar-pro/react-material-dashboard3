import React from 'react';
// , { useEffect }
import { useLocation, useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Grid, 
  Typography,
  // Avatar,
  Card,
  CardContent
} from '@material-ui/core';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '15px'
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px'
  },
  rows: {
    display: 'flex',
    marginTop: '20px'
  },
  lineBar: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  wrap: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto'
  },
  title: {
    fontSize: '32px',
  },
  date: {
    fontSize: '12px',
    color: theme.palette.inperson.font,
    backgroundColor: theme.palette.inperson.background,
    width: '106px',
  },
  badge: {
    width: '56px',
    height: '56px',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    fontSize: '30px'
  },

  card: {
    margin: '0 15px 15px 15px'
  },
  description: {
    color: '#8798AD',
    fontSize: '14px',
    marginTop: '10px'
  },
  desc: {
    fontSize: '16px',
    marginTop: '10px'
  },
  cardGrid: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px'
  },
  name: {
    fontSize: '15px'
  },
  avatar: {
    width: '32px',
    height: '32px'
  },
  subDate: {
    color: '#8798AD',
    fontSize: '12px'
  },
  students: {
    margin: '30px 0 10px 0',
    fontSize: '20px'
  },
  donut: {
    height: 100,
    width: 100,
    color: '#5CD9D8',
    fontFamily: 'Rubik',
    float: 'right'
  },
  status: {
    background: '#E7F9F9',
    color: '#5CD9D8',
    borderRadius: '5px',
    textTransform: 'capitalize',
    fontSize: '12px',
    float: 'right'
  },
  taskName: {
    display: 'flex',
    justifyContent: 'space-between'
  }

  // line: {
  //   width: '4px',
  //   height: '100%',
  //   backgroundColor: theme.palette.primary.main
  // }
}));

const TodoDetail = () => {
  const classes = useStyles();
  
  const location = useLocation();
  const todoList = location.state;

  const history = useHistory();

  // useEffect(() => {
    // todoList.map( (item) => {
    //   console.log(item.progress);
    
      // let chart = am4core.create("todochart" + item.id, am4charts.PieChart)
  
      // chart.data = [{
      //   "count": "",
      //   "percent": item.progress,
      // }, {
      //   "count": "",
      //   "percent": 100-item.progress
      // }];
  
      // let pieSeries = chart.series.push(new am4charts.PieSeries());
      // pieSeries.dataFields.value = "percent";
      // pieSeries.dataFields.category = "count";
      // pieSeries.labels.template.disabled = true;
      // pieSeries.ticks.template.disabled = true;
      // pieSeries.colors.list = [
      //   am4core.color("#5CD9D8"),
      //   am4core.color("#E7F9F9")
      // ];
      
      // chart.innerRadius = am4core.percent(70);
      
      // var label = pieSeries.createChild(am4core.Label);
      // label.text = item.progress + "%";
      // label.horizontalCenter = "middle";
      // label.verticalCenter = "middle";
      // label.fontSize = 15;

      // return () => {
      //   chart.dispose()
      // }
  //   })
  // }, [])

  const goBack = () => {
    history.goBack();
  }

  // console.log(location.state);
  return (
    <div className={classes.root}>
      <div className={classes.row} onClick={goBack}>
        <KeyboardBackspaceIcon style={{marginRight: '10px'}} />
        <Typography style={{cursor: 'pointer'}}>Back</Typography>
        <div className={classes.wrap}>          
          <Typography className={classes.title}>To Do List Name</Typography>
          <Typography className={classes.date}>May 19 - May 30</Typography>
        </div>
      </div>
      {todoList.map((item, index) => (
        <div className={classes.rows} key={index}>
          <div className={classes.lineBar}>
            <Typography className={classes.badge}>{item.id}</Typography>
            <div className={classes.line}></div>
          </div>
          <Card
            className={classes.card}
          >
            <CardContent style={{paddingTop: '0px'}}>
              <div>
                  <div className={classes.taskName}>
                    <div style={{fontSize: '24px'}}>{item.title}</div>
                    <div className={classes.status}>Complete</div>
                  </div>
                  <div className={classes.description}>Description</div>
                  <div className={classes.desc}>{item.description}</div>
              </div>

              <hr />
              <div className={classes.students}>
                You report
              </div>
              <div className={classes.description}>Comment</div>
              <div className={classes.desc}>{item.description}</div>
              <div className={classes.description}>Attachment file</div>
              <div className={classes.desc}>Resume.pdf</div>
              <Grid container>
                {/* {item.yStudents.map((subItem, index) => (
                  <Grid item lg={2} sm={3} xl={2} xs={6} key={index} className={classes.cardGrid}>
                    <Grid item xs={3}>
                      <Avatar
                        className={classes.avatar}
                        src={subItem.avatarUrl}
                      >
                        {subItem.name}
                      </Avatar>
                    </Grid>
                    <Grid item xs={9}>
                      <Grid item xs={12} style={{fontSize: '15px'}}>
                        {subItem.name}
                      </Grid>
                      <Grid item xs={12} className={classes.subDate}>
                        {subItem.date}
                      </Grid>
                    </Grid>
                  </Grid>
                ))} */}
              </Grid>
              {/* <div className={classes.students}>
                Students have not completed the task
              </div> */}
              {/* <Grid container>
                {item.nStudents.map((subItem, index) => (
                  <Grid item lg={2} sm={3} xl={2} xs={6} key={index} className={classes.cardGrid}>
                    <Grid item xs={3}>
                      <Avatar
                        className={classes.avatar}
                        src={subItem.avatarUrl}
                      >
                        {subItem.name}
                      </Avatar>
                    </Grid>
                    <Grid item xs={9} style={{fontSize: '15px'}}>
                      {subItem.name}
                    </Grid>
                  </Grid>
                ))}
              </Grid> */}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
};

TodoDetail.propTypes = {
  className: PropTypes.string
};

export default TodoDetail;