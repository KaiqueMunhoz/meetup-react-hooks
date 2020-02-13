import React from 'react';

const SubSection = ({ title, subtitle, description, children }) => (
  <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
    <div className="resume-content">
      {title && <h3 className="mb-0">{title}</h3>}
      {subtitle && (
        <div style={{ whiteSpace: 'pre' }} className="subheading mb-4">
          {subtitle}
        </div>
      )}
      {description && <p>{description}</p>}
      {children}
    </div>
  </div>
);

export default SubSection;
