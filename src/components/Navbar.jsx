import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../img/logo.jpg'
class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar is-light is-fixed-top">
          <div className="navbar-brand">
          <NavLink
            className="navbar-item"
            to="/profile"
          >
            <div
              style={{
                backgroundImage: `url(${Logo})`,
                borderRadius: '50%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: 48,
                height: 48
              }}
            />
          </NavLink>
          </div>
          <button className="button navbar-burger">
            <span />
            <span />
            <span />
          </button>
          <menu className="navbar-menu">
            <NavLink
              to="/"
              className="navbar-item"
              exact
              activeClassName="is-active"
            >
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
      </div>
    )
  }
}

export default NavBar
