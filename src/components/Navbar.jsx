import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../img/logo.jpg'
const NavBar = ({ onClick, isToggle }) => (
  <nav className="navbar is-light is-fixed-top">
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
        className={`button navbar-burger ${isToggle ? 'is-active' : ''}`}
        onClick={onClick}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
    <menu className={`navbar-menu ${isToggle ? 'is-active' : ''}`}>
      <NavLink to="/" className="navbar-item" exact activeClassName="is-active">
        Introducation
      </NavLink>
      <NavLink
        to="/reason"
        className="navbar-item"
        exact
        activeClassName="is-active"
      >
        Reason
      </NavLink>
    </menu>
  </nav>
)

export default NavBar
