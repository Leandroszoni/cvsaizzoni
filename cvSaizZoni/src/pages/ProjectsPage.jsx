import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import proyectosData from '../data/proyectos.json';

const ProjectsPage = () => {
  const [proyectos, setProyectos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setProyectos(proyectosData);
    } catch (err) {
      setError('No se pudieron cargar los proyectos.');
    } finally {
      setCargando(false);
    }
  }, []);

  if (cargando) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div>
      <h2 className="mb-4">Mis Proyectos</h2>
      {proyectos.length === 0 ? (
        <p>No hay proyectos para mostrar.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {proyectos.map((proyecto) => (
            <div className="col" key={proyecto.id}>
              <ProjectCard proyecto={proyecto} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
