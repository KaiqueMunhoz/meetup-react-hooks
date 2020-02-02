import React from 'react';
import Title from '../Title'
import Subtitle from '../Subtitle'
import Description from '../Description'

const About = () => (
  <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div className="w-100">
      <Title blackContent="Kaique" blueContent="Munhoz" />
      <Subtitle content="Mobile developer - React-Native | Kotlin | Swift" />
      <Description content="I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition." />
    </div>
  </section>
);

export default About
