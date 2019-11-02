import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from '../../firebase/firebase.utils';

import "./header.styles.scss";

const Header = ({ currentUser }) => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <NavLink className="option" to="/shop">
          Shop
        </NavLink>
        <NavLink className="option" to="/contact">
          Contact
        </NavLink>
        {
          currentUser ? 
          (<div className="option" onClick={() => auth.signOut()}>
            Sign out
          </div>) : 
          <NavLink className="option" to="/signin">
            Sign in
          </NavLink>
        }
      </div>
    </header>
  );
};

export default Header;
