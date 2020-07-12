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

import { SearchInput } from 'components';

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
    textAlign: 'left'
  },
  searchInput: {
    maxWidth: '500px',
    margin: '30px 0 20px 0'
  }
}));

const Companies = props => {
  const { className, users, ...rest } = props;
  const classes = useStyles();

  const cells = [
    'COMPANY NAME',
    'TYPE',
    'APPLICATIONS',
    'PHONE SCREEN',
    'IN PERSON',
    'OFFERS',
    'WEBSITE'
  ]

  return (
    <Card
      {...rest}
      className={clsx(classes.root1, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <SearchInput className={classes.searchInput}/>
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
                          {user.companyName}
                        </Avatar>
                        <Typography variant="body1">{user.companyName}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{user.type}</TableCell>
                    <TableCell>{user.applications}</TableCell>
                    <TableCell>{user.phoneScreen}</TableCell>
                    <TableCell>{user.inPerson}</TableCell>
                    <TableCell>{user.offers}</TableCell>
                    <TableCell>Go to link</TableCell>
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

Companies.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default Companies;
