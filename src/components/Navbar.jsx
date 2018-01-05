import React from 'react';
import { NavLink } from 'react-router-dom';
import Countdown from './Countdown';
import Logo from '../img/logo.jpg';
const NavBar = ({ onClick, isToggle, zooming }) => (
  <nav className="navbar is-dark is-fixed-top has-shadow">
    <div className="navbar-brand">
      <NavLink className="navbar-item" to="/profile">
        <div
          style={{
            backgroundImage: `url(${Logo})`,
            borderRadius: '50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: 40,
            height: 40
          }}
        />
      </NavLink>
      <button
        className={`burger navbar-burger ${isToggle ? 'is-active' : ''}`}
        onClick={onClick}>
        <span />
        <span />
        <span />
      </button>
    </div>
    <div className={`navbar-menu ${isToggle ? 'is-active' : ''}`}>
      <div className="navbar-start">
        <NavLink
          to="/"
          className="navbar-item"
          exact
          activeClassName="is-active">
          Introducation
        </NavLink>
        <NavLink
          to="/reason"
          className="navbar-item"
          exact
          activeClassName="is-active">
          Reason
        </NavLink>
      </div>
      <div className="navbar-end">
        <Countdown zooming={zooming}/>
      </div>
    </div>
  </nav>
);

export default NavBar;
