import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '145px',
    border: '1px solid #E3E5E6',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  todoName: {
    fontSize: '22px',
  },
  status: {
    background: '#E7F9F9',
    color: '#5CD9D8',
    borderRadius: '5px',
    textTransform: 'capitalize',
    fontSize: '12px',
    float: 'right',
  },
  duration: {
    fontSize: '12px',
    color: theme.palette.inperson.font,
    backgroundColor: theme.palette.inperson.background,
    width: '106px',
    marginTop: '16px',
    marginBottom: '20px',
  },
  tasks: {
    fontSize: '12px',
    color: theme.palette.phonescreen.font,
    backgroundColor: theme.palette.phonescreen.background,
    width: '50px',
    marginLeft: '15px',
  },
  badge: {
    borderRadius: '5px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  complete: {
    fontSize: '16px',
    justifyContent: 'flex-start',
    paddingBottom: '20px',
  },
}));

const todoList = [
  {
    id: '1',
    title: 'Example task name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
    status: 'Complete',
  },
  {
    id: '2',
    title: 'Example task name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
    status: 'In Progress',
  },
];

const ToDoCard = (props) => {
  const { className, data } = props;
  const classes = useStyles();
  const history = useHistory();

  const routerChange = () => {
    let path = `/tododetail`;
    history.push({ pathname: path, state: todoList });
  };

  return (
    <Card className={clsx(classes.root, className)} onClick={routerChange}>
      <CardContent>
        <Grid container className={classes.container}>
          <Grid item xs={9}>
            <Typography className={classes.todoName}>
              To Do List name
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Button className={classes.status}>{data.status}</Button>
          </Grid>

          <Grid item sm={5} xs={4}>
            <Typography className={`${classes.duration} ${classes.badge}`}>
              {data.duration}
            </Typography>
          </Grid>

          <Grid item sm={2} xs={2}>
            <Typography className={`${classes.tasks} ${classes.badge}`}>
              {data.tasks}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography className={`${classes.complete} ${classes.badge}`}>
              {data.complete}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ToDoCard.propTypes = {
  className: PropTypes.string,
};

export default ToDoCard;
