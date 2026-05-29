import React from 'react';
import PropTypes from 'prop-types';
import SkillBadge from './SkillBadge';

const ProjectCard = ({ proyecto }) => {
  return (
    <div className="card h-100 shadow-sm">
      {proyecto.imagen && (
        <img src={proyecto.imagen} className="card-img-top" alt={proyecto.nombre} />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{proyecto.nombre}</h5>
        <p className="card-text">{proyecto.descripcion}</p>
        <div className="mb-3">
          {proyecto.tecnologias.map((tech) => (
            <SkillBadge key={tech} nombre={tech} />
          ))}
        </div>
        {proyecto.link && (
          <a href={proyecto.link} target="_blank" rel="noreferrer" className="btn btn-outline-primary mt-auto">
            Ver proyecto
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  proyecto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    imagen: PropTypes.string,
    tecnologias: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
