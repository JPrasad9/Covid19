import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavBar() {
  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <NavLink className="nav-link" to="/"><h5> <strong>Covid Statistics</strong></h5> </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

      </ul>
    </div>
  </div>
</nav>
      </div>

    );
}
