import React from 'react';

const Section = ({ id, title, children }) => (
  <section
    className="resume-section p-3 p-lg-5 d-flex justify-content-center"
    id={id}
  >
    <div className="w-100">
      <h2 className="mb-5">{title}</h2>
      {children}
    </div>
  </section>
);

export default Section;
