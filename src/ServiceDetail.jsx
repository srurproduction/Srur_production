// ServiceDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function ServiceDetail() {
  const { name } = useParams();
  const formattedName = name.replace(/-/g, ' ');
  const imageList = [1, 2, 3,4].map(num => `/assets/${name}/${num}.jpg`);

  return (
    <section className="section-dark py-5 min-vh-100">
      <div className="container">
        <h2 className="text-center text-light fw-bold mb-5">
          {formattedName.charAt(0).toUpperCase() + formattedName.slice(1)} <span className="gradient-text">Projects</span>
        </h2>
        <div className="row">
          {imageList.map((imgPath, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <img
                src={imgPath}
                alt={`${formattedName} ${i + 1}`}
                className="img-fluid rounded shadow border border-secondary"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}