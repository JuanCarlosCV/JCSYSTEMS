import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/ProjectDetails.css';

// Datos de ejemplo (deberías reemplazarlos con tus proyectos reales)
const projectsData = [
  {
    id: 1,
    title: "E-commerce App",
    description: "Plataforma de comercio electrónico con carrito de compras y pasarela de pago.",
    longDescription: "Este proyecto fue desarrollado con React y Node.js, integrando Stripe para los pagos. Incluye funcionalidades como búsqueda en tiempo real, filtrado de productos y sistema de valoraciones.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    images: [
      "/assets/projects/ecommerce-1.jpg",
      "/assets/projects/ecommerce-2.jpg"
    ],
    githubUrl: "https://github.com/tuusuario/ecommerce-app",
    liveUrl: "https://ecommerce-ejemplo.com"
  },
  {
    id: 2,
    title: "Task Manager",
    description: "Aplicación para gestión de tareas con drag and drop.",
    longDescription: "Sistema completo de gestión de tareas con autenticación de usuarios, categorías personalizables y capacidad de arrastrar y soltar tareas entre diferentes estados.",
    technologies: ["React", "Firebase", "React DnD"],
    images: [
      "/assets/projects/taskmanager-1.jpg"
    ],
    githubUrl: "https://github.com/tuusuario/task-manager",
    liveUrl: "https://taskmanager-ejemplo.com"
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(proj => proj.id === parseInt(id));

  if (!project) {
    return <div className="project-not-found">Proyecto no encontrado</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="project-details-container"
    >
      <Link to="/" className="back-button">← Volver al portafolio</Link>
      
      <div className="project-header">
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.description}</p>
      </div>

      <div className="project-gallery">
        {project.images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Captura del proyecto ${project.title} ${index + 1}`}
            className="project-image"
          />
        ))}
      </div>

      <div className="project-content">
        <div className="project-description">
          <h2>Descripción detallada</h2>
          <p>{project.longDescription}</p>
        </div>

        <div className="project-technologies">
          <h2>Tecnologías utilizadas</h2>
          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="project-links">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            Ver código en GitHub
          </a>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link live-demo"
            >
              Ver demo en vivo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;