import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Navbar.css'
import logo from '../images/logo.png'

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Logo">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Sempi</span>
            <span className="font-weight-bold">Ternal</span>
          </Link>
        </div>
        <div className="menu">
           {/* <Link to="/">
            <span className="font-weight-bold ">Inicio</span>
          </Link>
          <Link  to="/team">
            <span className="font-weight-bold ">Team</span>
          </Link>
          <Link  to="/contactos">
            <span className="font-weight-bold ">Contactos</span>
          </Link> */}
        </div>        
      </div>
    );
  }
}

export default Navbar