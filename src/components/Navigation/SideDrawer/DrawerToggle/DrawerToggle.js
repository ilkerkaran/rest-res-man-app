import React from 'react';
import PropTypes from 'prop-types';
import './DrawerToggle.css';

const drawerToggle = ({ onClick }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { onClick(); }
  };
  return (
    <div
      className="DrawerToggle"
      onKeyPress={handleKeyDown}
      onClick={onClick}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

export default drawerToggle;

drawerToggle.propTypes = {
  onClick: PropTypes.func
};
