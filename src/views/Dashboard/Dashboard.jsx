import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import { UsersToolbar, Cohort, Companies, Interview } from './components';
import mockData1 from './data1';
import mockData2 from './data2';
import mockData3 from './data3';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} style={{padding: '0px'}}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
  },
  content: {
    margin: theme.spacing(2)
  },
  tabbar: {
    marginTop: '15px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '15px 15px 0 0',
    border: '1px solid #F1F3F4'
  },
  tab: {
    textTransform: 'capitalize'
  },
  table: {
    borderRadius: '0 0 15px 15px',
    marginBottom: '20px'
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const [users1] = useState(mockData1);
  const [users2] = useState(mockData2);
  const [users3] = useState(mockData3);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <UsersToolbar />
      <AppBar position="static" className={classes.tabbar}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="primary">
          <Tab label="Student's & Cohort" {...a11yProps(0)} className={classes.tab}/>
          <Tab label="Interview" {...a11yProps(1)} className={classes.tab}/>
          <Tab label="Companies" {...a11yProps(2)} className={classes.tab} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Cohort users={users1} className={classes.table}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Interview users={users2} className={classes.table}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Companies users={users3} className={classes.table}/>
      </TabPanel>
    </div>
  );
};

export default Dashboard;
