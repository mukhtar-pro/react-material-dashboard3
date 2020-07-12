import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Card,
  CardContent,
  Avatar,
  Button,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px 10px 10px 0',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(8, 35, 48, 0.08)'
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px'
  },
  collection: {
    width: '100%',
    height: 'auto'
  },
  profile: {
    background: theme.palette.application.background,
    color: theme.palette.application.font,
    borderRadius: '5px',
    fontSize: '12px',
    textTransform: 'capitalize'
  },
  avatar: {
    width: '32px',
    height: '32px',
    margin: '5px'
  },
  skill: {
    width: '50px',
    height: '25px',
    marginLeft: '10px',
    backgroundColor: theme.palette.application.background,
    borderRadius: '5px',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const CollectionCard = props => {
  const { collection } = props;
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardContent style={{padding: '0 0 10px 0'}}>
        <Avatar
          className={classes.collection}
          src={collection.cUrl}
          variant="square"
        >
          {collection.cUrl}
        </Avatar>
        <div className={classes.row} style={{justifyContent: 'space-between'}}>
          <div className={classes.row}>
            <Avatar
              src={collection.avatar}
              className={classes.avatar}
            >
              {collection.avatar}
            </Avatar>
            <Typography>{collection.name}</Typography>
          </div>
          <Button className={classes.profile}>Go to Profile</Button>
        </div>
        <div className={classes.row}>
          {collection.skills.map((skill, index) => (
            <Typography key={index} className={classes.skill}>{skill}</Typography>
          ))}
        </div>
      </CardContent>
    </Card>
  )
};

export default CollectionCard;