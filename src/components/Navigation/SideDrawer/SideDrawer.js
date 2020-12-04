import React from 'react';
import PropTypes from 'prop-types';
import './SideDrawer.css';
import NavigaitonItems from '../NavigationItems/NavgitaionItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = ({ open, onBackdropClick }) => {
  const sideDrawerClass = `SideDrawer ${open ? 'Open' : 'Close'}`;
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') { onBackdropClick(); }
  };
  return (
    <>
      <Backdrop show={open} onClick={onBackdropClick} />
      <div
        onClick={onBackdropClick}
        onKeyDown={handleKeyDown}
        className={sideDrawerClass}
      >
        <div className="side-drawer-logo">
          RestaRate
        </div>
        <nav>
          <NavigaitonItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;

sideDrawer.propTypes = {
  open: PropTypes.bool,
  onBackdropClick: PropTypes.func
};
