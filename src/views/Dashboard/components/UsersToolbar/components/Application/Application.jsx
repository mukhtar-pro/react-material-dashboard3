import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';

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
  application: {
    color: theme.palette.primary.main,
    borderRadius: '10px',
    backgroundColor: theme.palette.background.card1
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
    color: '#5CD9D8',
    fontFamily: 'Rubik'
  }
}));

const Application = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const chartRef = useRef();

  useEffect(() => {

    chartRef.current = am4core.create("chartdiv1", am4charts.PieChart);
    let chart = chartRef.current;

    chart.data = [{
      "count": "",
      "percent": 40,
    }, {
      "count": "",
      "percent": 60
    }];

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "count";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.colors.list = [
      am4core.color("#5CD9D8"),
      am4core.color("#E7F9F9")
    ];
    
    chart.innerRadius = am4core.percent(70);
    
    var label = pieSeries.createChild(am4core.Label);
    label.text = "+40%";
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
              <DescriptionIcon className={classes.application} />
            </Grid>
            <Grid item xs={10}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                APPLICATION
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">14</Typography>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <div id="chartdiv1" className={classes.donut}></div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Application.propTypes = {
  className: PropTypes.string
};

export default Application;
