import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Punto de Venta AUTOLATA',
      description: 'Sistema de Ventas/Inventario/Control de gastos',
      image: '/assets/fondo.jpg',
      tags: ['JAVA', 'Node.js', 'MYSQL']
    },
    // Más proyectos...
  ];

  return (
    <section id="projects" className="projects">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;