import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Popover,
  Divider
} from '@material-ui/core';

import {
   MoreHoriz,
   Delete,
   EditOutlined
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px',
    borderRadius: '10px 10px 0 0'
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px',
    cursor: 'pointer'
  },
  collection: {
    width: '100%',
    height: 'auto'
  },
  proName: {
    fontWeight: '500',
    fontSize: '16px',
    marginLeft: '10px'
  },
  profile: {
    background: theme.palette.application.background,
    color: theme.palette.application.font,
    borderRadius: '5px',
    fontSize: '12px',
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
  },
  moreHoriz: {
    color: theme.palette.primary.main,
    cursor: 'pointer'
  },
  editIcon: {
    margin: '10px'
  },
  deleteIcon: {
    margin: '10px',
    color: '#E64646'
  }
}))

const CollectionCard = props => {
  const { collection } = props;
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const routerChange = () => {
    console.log("dfd");
    let path=`/editportfolio`;
    history.push(path);
  }

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
          <Typography className={classes.proName}>{collection.proName}</Typography>
          <MoreHoriz className={classes.moreHoriz} onClick={handleClick}/>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <div className={classes.row} onClick={routerChange}>
              <EditOutlined className={classes.editIcon}/>
              <Typography>Edit Project</Typography>
            </div>
            <Divider />
            <div className={classes.row}>
              <Delete className={classes.deleteIcon}/>
              <Typography style={{color: '#E64646'}}>Delete Project</Typography>
            </div>
          </Popover>
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