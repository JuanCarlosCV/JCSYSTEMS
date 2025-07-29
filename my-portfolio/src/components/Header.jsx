import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efecto para cambiar el header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al hacer clic en un enlace
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Links de navegación
  const navLinks = [
    { name: 'Inicio', path: '#home' },
    { name: 'Sobre mí', path: '#about' },
    { name: 'Habilidades', path: '#skills' },
    { name: 'Proyectos', path: '#projects' },
    { name: 'Contacto', path: '#contact' }
  ];

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" onClick={closeMobileMenu}>
              <span className="logo-text">Portafolio</span>
            </Link>
          </motion.div>

          {/* Menú de navegación para desktop */}
          <nav className="desktop-nav">
            <ul>
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={link.path} 
                    className="nav-link"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Botón para menú móvil */}
          <button 
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Menú de navegación para móvil */}
        <motion.nav 
          className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <ul>
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: mobileMenuOpen ? 0 : -20,
                  opacity: mobileMenuOpen ? 1 : 0
                }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  href={link.path} 
                  className="nav-link"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;