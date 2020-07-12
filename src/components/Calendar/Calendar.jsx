import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  calendar: {
    boxShadow: '5.14419px 5.14419px 10.2884px rgba(144, 146, 152, 0.2)',
    borderRadius: '15px',
  }
}));

const Calendar = () => {
  const [date, changeDate] = useState(new Date());

  const classes = useStyles();

  return (
    <div className={classes.calendar}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
            autoOk
            variant="static"
            openTo="date"
            value={date}
            onChange={changeDate}
            
          />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default Calendar;
