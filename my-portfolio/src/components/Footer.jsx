import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>cabreravegacar@hotmail.com</p>
            <p>4172121379</p>
          </div>
          
          <div className="footer-section">
            <h3>Redes Sociales</h3>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="GitHub">GitHub</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados. JCSYSTEMS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;