import React from 'react';
import './searchbar.scss';

const Toolbar = () => {
  return (
    <nav className="toolbar__nav">
      <span className="toolbar__search-icon"></span>
      <input className="toolbar__search" type="text" placeholder="Search" />
      <span className="toolbar__close-icon"></span>
    </nav>
  )
}

export default Toolbar