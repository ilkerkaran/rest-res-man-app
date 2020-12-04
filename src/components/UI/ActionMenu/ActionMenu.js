import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu, IconButton, MenuItem, Box
} from '@material-ui/core';
import { MoreVert as MoreVertIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { selectOptionTypes } from '../../../propTypes/types';

const useStyles = makeStyles({
  actionMenu: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '95%'
  }
});
const ActionMenu = ({ icon, options }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    setAnchorEl(null);
    const selectedOption = options.filter((o) => o.event).find(
      (o) => o.value === value
    );
    if (selectedOption && selectedOption.event) { selectedOption.event(value); }
  };

  const optionsContent = options.filter((o) => o.event).map((option) => (
    <MenuItem key={option.value} onClick={() => handleClose(option.value)}>
      {option.text}
    </MenuItem>
  ));
  return optionsContent.length > 0 ? (
    <>
      <Box className={classes.actionMenu}>
        <IconButton onClick={handleClick}>
          {icon || <MoreVertIcon />}
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={!!anchorEl}
          onClose={handleClose}
        >
          {optionsContent}
        </Menu>
      </Box>
    </>
  ) : null;
};

export default ActionMenu;
ActionMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape(selectOptionTypes)).isRequired,
  icon: PropTypes.object
};

ActionMenu.defaultProps = {
  icon: null

};
