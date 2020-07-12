import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

import {
  AppBar,
  Tabs,
  Tab,
  Box
} from '@material-ui/core';

import Portfolio from './Portfolio';
import Certification from './Certification';
import CodingPractice from './CodingPractice';
import NotFound from './NotFound';
// import { CustomButton } from 'components';

const useStyles = makeStyles((theme) => ({
  tabbar: {
    marginTop: '15px',
    backgroundColor: 'white',
    color: '#8798AD',
  },
  tab: {
    textTransform: 'capitalize'
  },
}))

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

const Detail = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <div>
      <AppBar position="static" className={classes.tabbar}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="primary">
          <Tab label="Portfolio" {...a11yProps(0)} className={classes.tab}/>
          <Tab label="Certifications" {...a11yProps(1)} className={classes.tab}/>
          <Tab label="Coding Practice" {...a11yProps(2)} className={classes.tab} />
          {/* <CustomButton buttonLabel="Add Project" {...a11yProps(0)} style={{margin: '5px 5px 0 auto'}}></CustomButton> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Portfolio />
        {/* <NotFound /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Certification />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CodingPractice />
      </TabPanel>
    </div>
  )
};

export default Detail;