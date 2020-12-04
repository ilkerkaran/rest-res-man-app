import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker, MuiPickersUtilsProvider
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    width: '150px',
    margin: 'auto'
  }
});

const DatePicker = ({ label, value, onChange }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          className={classes.root}
          autoOk
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label={label}
          value={value}
          onChange={onChange}
        />
      </MuiPickersUtilsProvider>
    </Box>
  );
};

export default DatePicker;

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired

};
DatePicker.defaultProps = {
  value: ''
};
