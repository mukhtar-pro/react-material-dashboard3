import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CodeIcon from '@material-ui/icons/CodeOutlined';
import SolutionIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import PortfolioIcon from '@material-ui/icons/LibraryAddOutlined';
import ApplicationIcon from '@material-ui/icons/DescriptionOutlined';
import ChallengeIcon from '@material-ui/icons/CategoryOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 190,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />
    },
    { 
      title: 'Daily Coding', 
      href: '/dailycoding', 
      icon: <CodeIcon /> 
    },
    { 
      title: 'Solutions', 
      href: '/solutions', 
      icon: <SolutionIcon /> 
    },
    { 
      title: 'Job application', 
      href: '/ats', 
      icon: <ApplicationIcon /> 
    },
    { 
      title: 'Challenge', 
      href: '/challenges', 
      icon: <ChallengeIcon /> 
    },
    {
      title: 'Message',
      href: '/message',
      icon: <MailOutlineIcon />,
      badge: '4'
    },
    {
      title: 'To do list',
      href: '/todolist',
      icon: <ListAltIcon />
    },
    { 
      title: 'Portfolio', 
      href: '/portfolio', 
      icon: <PortfolioIcon /> 
    },
    // {
    //   title: 'Engagement',
    //   href: '/Engagement',
    //   icon: <CalendarTodayIcon />
    // },
    {
      title: 'Settings',
      href: '/settings',
      icon: <SettingsIcon />
    },
    {
      title: 'Log out',
      href: '/dashboard',
      icon: <ExitToAppIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <img
          alt="Logo"
          src="/logo.svg"
        />
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
