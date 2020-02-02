import React from 'react';

const Motivation = ({ title, subtitle, description }) => (
  <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
    <div className="resume-content">
      <h3 className="mb-0">{title}</h3>
      <div className="subheading mb-3">{subtitle}</div>
      <p>{description}</p>
    </div>
  </div>
);

export default Motivation;
