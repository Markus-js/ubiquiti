import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Ubiquiti_logo.svg';


const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className="header__img" src={logo} alt="Ubiquiti" />
      </Link>
      <nav className="header__text">
        <p className="header__text--title">Devices</p>
        <p className="header__text--author">Markus Backhausen</p>
      </nav>
    </header>
  )
}

export default NavBar