import React from 'react';
import Title from '../Title'
import Subtitle from '../Subtitle'
import Topics from '../Topics'

const experiences = [
  "Desenvolvedor React | React-Native | Node - Oi",
  "Testes automatizados Appium | Selenium - Banco Pan",
  "Desenvolvedor Android(Kotlin) arquitetura MVVM - Banco Pan",
  "Sustentação App Android(Kotlin) - Banco Pan"
]

const formations = [
  "Bootcamp Node, React, React-Native (RocketSeat)",
  "Nanodegree React (Udacity)",
  "Bacharel em Ciências da Computação (UNIFEG)"
]

const socialMedias = [
  "Github: https://github.com/KaiqueMunhoz",  
  "Linkedin: https://www.linkedin.com/in/kaique-munhoz-developer",
  "Twitter: https://twitter.com/kaique_munhoz"
]

const About = () => (
  <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div className="w-100">
      <Title blackContent="Kaique" blueContent="Munhoz" />
      <Subtitle content="Mobile developer - React-Native | Kotlin | Swift" />
      <Topics title="Experiências" topics={experiences}/>
      <Topics title="Formações" topics={formations}/>
      <Topics title="Redes Socias" topics={socialMedias}/>
    </div>
  </section>
);

export default About
