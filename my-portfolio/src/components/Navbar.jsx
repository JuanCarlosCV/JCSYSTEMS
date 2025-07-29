import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav  className={`navbar-react-bits ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* <Link to="/" className="navbar-brand">JC SYSTEMS</Link> */}
          <div className="logo">JCSYSTEMS</div>
         <button 
          className={`hamburger ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button> 
        
        <ul className="nav-links">
          <li><a href="#home" >Inicio</a></li>
          <li><a href="#about" >Sobre mí</a></li>
          <li><a href="#skills" >Habilidades</a></li>
          <li><a href="#projects" >Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;