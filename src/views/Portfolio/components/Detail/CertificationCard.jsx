import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Avatar,
  Typography,
  Grid,
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
    display: 'flex',
    alignItems: 'center',
    borderRadius: '15px',
    border: '1px solid #E3E5E6',
    height: '135px',
    padding: '0 11px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
  },
  row1: {
    margin: '5px',
    cursor: 'pointer'
  },
  avatar: {
    width: '92px',
    height: '92px'
  },
  moreHoriz: {
    color: theme.palette.primary.main,
    cursor: 'pointer'
  },
  editIcon: {
    margin: '10px',
    width: '22px',
    height: '22px',
  },
  deleteIcon: {
    margin: '10px',
    color: '#E64646',
    width: '23px',
    height: '23px',
  }
}))

const CertificationCard = props => {
  const classes = useStyles();
  const { certification } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <Grid container className={classes.root}>
      <Grid item lg={3} md={4} sm={2} xs={4} className={classes.row}>
        <Avatar
          className={classes.avatar}
          variant="rounded"
          src={certification.avatar}
        >
          {certification.logoUrl}
        </Avatar>
      </Grid>
      <Grid item lg={9} md={8} sm={10} xs={8}>
        <div className={classes.row} style={{justifyContent: 'space-between'}}>
          <Typography variant="caption">{certification.certName}</Typography>
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
            <div className={`${classes.row1} ${classes.row}`}>
              <EditOutlined className={classes.editIcon}/>
              <Typography>Edit Project</Typography>
            </div>
            <Divider />
            <div className={`${classes.row1} ${classes.row}`}>
              <Delete className={classes.deleteIcon}/>
              <Typography style={{color: '#E64646'}}>Delete Project</Typography>
            </div>
          </Popover>
        </div>
        <Typography variant="h5" style={{color: '#8798AD'}}>{certification.id}</Typography>
        <div className={classes.row}>
          <Typography variant="h5">{certification.from}</Typography>
          <Typography variant="h5" style={{marginLeft: '30px'}}>{certification.to}</Typography>
        </div>
      </Grid>
    </Grid>
  )
};

export default CertificationCard;