import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const useStyles = makeStyles(theme => ({
  root: {
    height: '120px',
    border: '1px solid #F1F3F4',
    borderRadius: '15px'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  phonescreen: {
    color: '#5643FC',
    borderRadius: '10px',
    backgroundColor: '#EEECFE'
  },
  title: {
    fontWeight: 400,
    fontSize: 'normal',
    marginLeft: '10px',
    color: '#8798AD'
  },
  donut: {
    height: 85,
    width: 85,
    // color: '#5643FC',
    fontFamily: 'Rubik'
  }
}));

const PhoneScreen = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const chartRef = useRef();

  useEffect(() => {

    chartRef.current = am4core.create("chartdiv2", am4charts.PieChart);
    let chart = chartRef.current;
    chart.data = [{
      "count": "",
      "percent": 60,
    }, {
      "count": "",
      "percent": 40
    }];

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "count";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.colors.list = [
      am4core.color("#5643FC"),
      am4core.color("#EEECFE")
    ];
    
    chart.innerRadius = am4core.percent(70);
    
    var label = pieSeries.createChild(am4core.Label);
    label.text = "+60%";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 15;

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item xs={8} container>
            <Grid item xs={2}>
              <PhoneIcon className={classes.phonescreen} />
            </Grid>
            <Grid item xs={10}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                PHONE SCREEN
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">8</Typography>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <div id="chartdiv2" className={classes.donut}></div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

PhoneScreen.propTypes = {
  className: PropTypes.string
};

export default PhoneScreen;
