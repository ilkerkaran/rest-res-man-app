import React from 'react';
import './NavigationItem.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => {
  const { link, children } = props;
  return (
    <li className="NavigationItem">
      <NavLink to={{ pathname: link }} exact>{children}</NavLink>
    </li>
  );
};

export default navigationItem;

navigationItem.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string
};
