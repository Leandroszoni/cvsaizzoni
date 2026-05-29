import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ tema, toggleTema }) => {
  const navbarClass = tema === 'dark' ? 'navbar navbar-expand-lg navbar-dark bg-dark' : 'navbar navbar-expand-lg navbar-light bg-light';
  const buttonClass = tema === 'dark' ? 'btn btn-outline-light ms-auto' : 'btn btn-outline-secondary ms-auto';

  return (
    <nav className={navbarClass}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mi Portafolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre mí</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>
          </ul>
          <button className={buttonClass} type="button" onClick={toggleTema}>
            {tema === 'light' ? '🌙 Modo oscuro' : '☀️ Modo claro'}
          </button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  tema: PropTypes.string.isRequired,
  toggleTema: PropTypes.func.isRequired,
};

export default Navbar;
