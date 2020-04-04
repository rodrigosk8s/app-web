import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Navbar.css'
import logo from '../images/logo.png'

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">App</span>
            <span className="font-weight-bold">Web</span>
          </Link>
        </div>
        
        <Link  to="/">
            <span className="font-weight-bold ">Inicio</span>
          </Link>
      </div>
    );
  }
}

export default Navbar