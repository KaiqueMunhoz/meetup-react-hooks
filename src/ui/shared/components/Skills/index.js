import React from 'react';
import Topics from '../Topics'

const topics = [
  "Mobile-First, Responsive Design", 
  "Cross Browser Testing Debugging", 
  "Cross Functional Teams", 
  "Agile Development Scrum"
]

const Skills = () =>  (
  <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
  <div className="w-100">
    <h2 className="mb-5">Skills</h2>

    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
    <ul className="list-inline dev-icons">
      <li className="list-inline-item">
        <i className="fab fa-html5"></i>
      </li>
      <li className="list-inline-item">
        <i className="fab fa-css3-alt"></i>
      </li>
      <li className="list-inline-item">
        <i className="fab fa-js-square"></i>
      </li>
      <li className="list-inline-item">
        <i className="fab fa-angular"></i>
      </li>
      <li className="list-inline-item">
        <i className="fab fa-react"></i>
      </li>
      <li className="list-inline-item">
        <i className="fab fa-node-js"></i>
      </li>
      <li className="list-inline-item">
        <i className="fab fa-sass"></i>
      </li>
      <li className="list-inline-item">
        <i className="fab fa-less"></i>
      </li>
      <li className="list-inline-item">
        <i className="fab fa-wordpress"></i>
      </li>
      <li className="list-inline-item">
        <i className="fab fa-gulp"></i>
      </li>
      <li className="list-inline-item">
        <i className="fab fa-grunt"></i>
      </li>
      <li className="list-inline-item">
        <i className="fab fa-npm"></i>
      </li>
    </ul>
    <Topics title="Workflow" topics={topics}/>
    </div>
</section>
);


export default Skills