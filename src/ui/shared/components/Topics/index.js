import React from 'react';
const Topics = ({ title, topics }) => (
  <>
    <div className="subheading mb-3">{title}</div>
    <ul className="fa-ul mb-0">
      {topics &&
        topics.map(topic => (
          <li>
            <i className="fa-li fa fa-check">{topic}</i>
          </li>
        ))}
    </ul>
    <br />
  </>
);
export default Topics;
