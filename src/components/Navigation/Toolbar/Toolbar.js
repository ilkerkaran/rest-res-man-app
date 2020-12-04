import React from 'react';
import './Toolbar.css';
import NavigaitonItems from '../NavigationItems/NavgitaionItems';

const Toolbar = () => (
  <header className="Toolbar">
    <nav className="DesktopOnly">
      <NavigaitonItems />

    </nav>
  </header>
);

export default Toolbar;
