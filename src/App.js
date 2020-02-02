import React from 'react';
import NavBar from './ui/shared/components/NavBar'
import About from './ui/shared/components/About'
import Line from './ui/shared/components/Line'
import Experience from './ui/shared/components/Experience'
import Skills from './ui/shared/components/Skills'

function App() {
  return (
  <>
    <NavBar />
    <div className="container-fluid p-0">
      <About />
      <Line />
      <Experience />
      <Line />
      <Skills />
      <Line />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
          <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
        </div>
      </section>
      
    </div>
  </>
  );
}

export default App;
