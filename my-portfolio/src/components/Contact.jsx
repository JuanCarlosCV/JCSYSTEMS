import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nombre es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'Email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email no válido';
    }
    if (!formData.message.trim()) newErrors.message = 'Mensaje es requerido';
    else if (formData.message.trim().length < 10) newErrors.message = 'Mensaje muy corto';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="contact-section"
    >
      <div className="container">
        <h2 className="section-title">Contáct<span>ame</span></h2>
        <p className="section-subtitle">¿Tienes un proyecto en mente? Envíame un mensaje y hablemos.</p>

        <div className="contact-content">
          {/* Formulario de contacto */}
          <motion.form 
            ref={form}
            onSubmit={handleSubmit}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Tu nombre completo"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="tu@email.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                rows="6"
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="submit-btn"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="success-message"
              >
                ¡Mensaje enviado con éxito! Te responderé pronto.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="error-message"
              >
                Hubo un error al enviar. Por favor, inténtalo de nuevo más tarde.
              </motion.div>
            )}
          </motion.form>

          {/* Información de contacto */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="contact-info"
          >
            <h3>Información de Contacto</h3>
            
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:contacto@ejemplo.com">cabreravegacar@hotmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h4>Teléfono</h4>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Ubicación</h4>
                <p>Acambaro Gto, México</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com/in/tuusuario" onClick={(e) => e.preventDefault()} aria-label="LinkedIn" className="social-icon">LinkedIn</a>
              <a href="https://github.com/tuusuario" onClick={(e) => e.preventDefault()} aria-label="GitHub" className="social-icon">GitHub</a>
              <a href="https://twitter.com/tuusuario" onClick={(e) => e.preventDefault()} aria-label="Twitter" className="social-icon">Twitter</a>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default Contact;