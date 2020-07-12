import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import AnnouncementIcon from '@material-ui/icons/Announcement';

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
  offer: {
    color: '#39D98A',
    borderRadius: '10px',
    backgroundColor: '#E9FFF4'
  },
  title: {
    fontWeight: 400,
    fontSize: 'normal',
    marginLeft: '10px'
  },
  donut: {
    height: 85,
    width: 85,
    // color: '#5CD9D8',
    fontFamily: 'Rubik'
  }
}));

const Offer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  // let chart = null;
  const chartRef = useRef();

  useEffect(() => {
    // chart = am4core.create("chartdiv4", am4charts.PieChart);

    chartRef.current = am4core.create("chartdiv4", am4charts.PieChart);
    let chart = chartRef.current;
    chart.data = [{
      "count": "",
      "percent": 55,
    }, {
      "count": "",
      "percent": 45
    }];

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "count";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.colors.list = [
      am4core.color("#39D98A"),
      am4core.color("#E9FFF4")
    ];
    
    chart.innerRadius = am4core.percent(70);
    
    var label = pieSeries.createChild(am4core.Label);
    label.text = "+55%";
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
              <AnnouncementIcon className={classes.offer} />
            </Grid>
            <Grid item xs={10}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                OFFER
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">8</Typography>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <div id="chartdiv4" className={classes.donut}></div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Offer.propTypes = {
  className: PropTypes.string
};

export default Offer;
