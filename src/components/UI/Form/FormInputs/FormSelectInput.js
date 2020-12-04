import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import {
  FormControl, InputLabel, Select, MenuItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { inputConfigTypes } from '../../../../propTypes/types';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '80%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const SelectComp = ({ className, inputConfig, control }) => {
  const [addDefaultValue, setAddDefaultValue] = useState(!inputConfig.value);
  const classes = useStyles();
  const opt = inputConfig.options.map((o) => (
    <MenuItem value={o.value}>{o.text}</MenuItem>
  ));

  const onChange = (e) => {
    if (inputConfig.onChange) { inputConfig.onChange(e); }
    if (addDefaultValue) { setAddDefaultValue(false); }
  };
  return (
    <div className={className}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id={`${inputConfig.inputName}_label`}>{inputConfig.label}</InputLabel>
        <Controller
          as={(
            <Select
              labelId={`${inputConfig.inputName}_label`}
              id={inputConfig.inputName}
              onChange={onChange}
              label={inputConfig.label}
              value={(inputConfig.options[0] && inputConfig.options[0].id) || ''}
            >
              {opt}
            </Select>
      )}
          rules={inputConfig.isRequired ? { required: 'You must select an option!' } : null}
          control={control}
          name={inputConfig.inputName}
        />
      </FormControl>
      <div style={{ color: 'darkred' }}>
        {inputConfig.errors[inputConfig.inputName]
      && inputConfig.errors[inputConfig.inputName].message}
      </div>
    </div>
  );
};

export default SelectComp;

SelectComp.propTypes = {
  className: PropTypes.string,
  ...inputConfigTypes
};

SelectComp.defaultProps = {
  className: ''
};
