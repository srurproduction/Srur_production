import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.jpeg';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm fixed-top"
      style={{
        background: 'linear-gradient(135deg, #8B5E3C, #D8A055)',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
      }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Logo"
            style={{ height: '50px', width: '50px', borderRadius: '50%' }}
          />
          <span className="fs-3 fw-bolder px-3 text-white">Srur Production</span>
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            {["HomePage", "About", "services", "gallery", "testimonials", "contact"].map((section, i) => (
              <li className="nav-item px-2" key={i}>
                <a
                  href={`#${section}`}
                  className="nav-link fw-semibold text-white hover-link fs-5"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .hover-link:hover {
          color: #000000 !important;
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 8px;
          padding: 4px 10px;
          transition: all 0.3s ease-in-out;
        }
        .navbar-nav .nav-link {
          margin: 5px 0;
        }
      `}</style>
    </nav>
  );
}