// Services.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = ["Branding", "Logo Design", "Social Media", "Posters", "Packaging", "UI/UX"];

  return (
    <section id="services" className="section-dark container-fluid py-5">
      <h2 className="text-center fs-1 fw-bold mb-5 text-light">
        My <span className="gradient-text">Services</span>
      </h2>
      <div className="row px-3">
        {services.map((service, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <Card className="h-100 shadow-lg bg-dark text-light border border-secondary rounded-4 p-3">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="fs-4 fw-semibold mb-3 text-info">
                  {service}
                </Card.Title>
                <Card.Text>
                  <Link
                    to={`/service/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-warning text-decoration-none"
                  >
                    Check out my latest {service.toLowerCase()} work →
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}