import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Sección Hero (Portada principal) */}
      <section id="home">
        <Hero />
        
      </section>

      {/* Sección Sobre Mí */}
      <section id="about">
        <About />
      </section>

      {/* Sección Habilidades */}
      <section id="skills">
        <Skills />
      </section>

      {/* Sección Proyectos */}
      <section id="projects">
        <Projects />
      </section>

      {/* Sección Contacto */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;