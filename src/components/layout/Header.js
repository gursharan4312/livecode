import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
      <header>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">LiveCode</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navItems" aria-controls="navItems" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navItems">
          <div className="navbar-nav ml-auto">
          <Link to="/" className="nav-item nav-link active">Home</Link>
          <Link to="/features" className="nav-item nav-link">Features</Link>
          </div>
        </div>
      </nav>
      </header>
  )
}

export default Header;
