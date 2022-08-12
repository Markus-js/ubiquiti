import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import logoActive from '../../assets/logo-active.svg';
// STYLE
import './header.scss';


const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          onMouseOver={(e) => {
            e.currentTarget.src = logoActive;
          }}
          onMouseOut={(e) => {
            e.currentTarget.src = logo;
          }}
          className="header__logo" src={logo} alt="Ubiquiti" />
      </Link>
      <nav className="header__nav">
        <h2 className="header__title">Devices</h2>
        <p className="header__author">Markus Backhausen</p>
      </nav>
    </header>
  )
}

export default Header