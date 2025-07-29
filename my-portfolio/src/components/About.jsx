import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  // Datos personales (modifícalos con tu información)
  const personalInfo = {
    nombre: "JUAN CARLOS CABRERA VEGA",
    titulo: "Desarrollador Frontend/Backend",
    experiencia: "3+ años",
    bio: "Soy una apasionado por crear interfaces web intuitivas y atractivas, con enfoque en React y diseño responsive. Me especializo en convertir ideas complejas en experiencias de usuario fluidas.",
    habilidades: [
      "React", "JavaScript", "TypeScript", "CSS/SASS", 
      "Git", "UI/UX", "Testing", "APIs REST"
    ],
    educacion: [
      "Ing. Sistemas Computaciones Tecnologico de Monterrey 2024",
          ]
  };

  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="about-section"
    >
      <div className="container">
        <h2 className="section-title">Sobre <span>Mí  </span></h2>
      
        <div className="about-content">
          {/* Columna izquierda - Foto */}
          <div className="about-image">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img 
                src="/assets/about-photo.jpg" 
                alt={personalInfo.nombre} 
                className="profile-img"
              />
            </motion.div>
          </div>
          
          {/* Columna derecha - Información */}
          <div className="about-info">
            <h3>{personalInfo.nombre}</h3>
            <p className="subtitle">{personalInfo.titulo} | {personalInfo.experiencia} de experiencia</p>
            
            <p className="bio-text">{personalInfo.bio}</p>
               
            {/* Habilidades */}
            <div className="skills-container">
              <h4>Habilidades Principales:</h4>
              <ul className="skills-list">
                {personalInfo.habilidades.map((habilidad, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {habilidad}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Educación */}
            <div className="education-container">
              <h4>Educación:</h4>
              <ul className="education-list">
                {personalInfo.educacion.map((item, index) => (
                  <li key={index}>
                    <span className="education-icon">🎓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Botón de CV */}
            <motion.a
              href="/assets/cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="download-btn"
            >
              Descargar CV
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;