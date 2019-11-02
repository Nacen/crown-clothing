import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <NavLink className="option" to="/shop">Shop</NavLink>
        <NavLink className="option" to="/contact">Contact</NavLink>
        <NavLink className="option" to="/signin">Signin</NavLink>
      </div>
      
    </header>
  )
}

export default Header
