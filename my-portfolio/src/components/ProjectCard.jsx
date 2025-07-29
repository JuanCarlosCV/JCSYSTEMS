import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <Link to={`/projects/${project.id}`} className="view-project">
        Ver Detalles
      </Link>
    </div>
  );
};

export default ProjectCard;