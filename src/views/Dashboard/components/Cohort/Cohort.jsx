import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';

import { DropDown } from 'components';

const items1 = [
  "Student's",
  "Cohort",
]

const useStyles = makeStyles(theme => ({
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Rubik'
  },
  avatar: {
    marginRight: theme.spacing(2),
    width: '32px',
    height: '32px'
  },
  avatar1: {
    marginRight: theme.spacing(2),
    width: '24px',
    height: '24px'
  },
  cell: {
    color: '#BFC5D2',
    textAlign: 'left',
    letterSpacing: '1.12px'
  }
}));

const Cohort = props => {
  const { className, users, ...rest } = props;
  const classes = useStyles();

  const cells = [
    'NAME',
    'CODING CHALLENGE',
    'APPLICATIONS',
    'PHONE SCREEN',
    'IN PERSON',
    'OFFERS',
    'LAST ACTIVITY'
  ]

  return (
    <Card
      {...rest}
      className={clsx(classes.root1, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          
          <DropDown items={items1} inputLabel="Please select"/>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow className={classes.cell}>
                  {cells.map( (cell, index) => (
                    <TableCell key={index} className={classes.cell}>{cell}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map(user => (
                  <TableRow
                    hover
                    key={user.id}
                  >
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          src={user.avatarUrl}
                        >
                          {user.name}
                        </Avatar>
                        <Typography variant="body1">{user.name}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar1}
                          src={user.codingStatus}
                        >
                          {user.codingChallenge}
                        </Avatar>
                        <Typography variant="body1">{user.codingChallenge}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{user.applications}</TableCell>
                    <TableCell>{user.phoneScreen}</TableCell>
                    <TableCell>{user.inPerson}</TableCell>
                    <TableCell>{user.offers}</TableCell>
                    <TableCell>{user.createdAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

Cohort.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default Cohort;
