import React from 'react';

const Title = ({ blackContent, blueContent }) => (
  <h1 className="mb-0">
    {blackContent}
    <span className="text-primary"> {blueContent}</span>
  </h1>
);

export default Title;
