import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
      <header>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">LiveCode</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
          <Link to="/" className="nav-item nav-link active">Home</Link>
          <Link to="/features" className="nav-item nav-link">Features</Link>
          </div>
        </div>
      </nav>
      </header>
  )
}

export default Header;
