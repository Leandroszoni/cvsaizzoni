import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SkillBadge from '../components/SkillBadge';

const HomePage = ({ tema, toggleTema }) => {
  const [perfil] = useState({
    nombre: 'Leandro Saiz Zoni',
    titulo: 'Desarrollador Frontend',
    descripcion: 'Construyo experiencias web accesibles y modernas con React, Bootstrap y buenas prácticas de desarrollo.',
  });

  const [habilidades] = useState(['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Git']);

  return (
    <div>
      <section className="text-center py-5">
        <h1>{perfil.nombre}</h1>
        <p className="lead">{perfil.titulo}</p>
        <p>{perfil.descripcion}</p>
        <div className="mt-4">
          <button className={tema === 'dark' ? 'btn btn-outline-light me-2' : 'btn btn-outline-dark me-2'} onClick={toggleTema}>
            {tema === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
          </button>
          <Link to="/contact" className="btn btn-primary">
            Contactarme
          </Link>
        </div>
      </section>
      <section className="mb-5">
        <h2>Habilidades principales</h2>
        <div className="d-flex flex-wrap justify-content-center mt-3">
          {habilidades.map((skill) => (
            <SkillBadge key={skill} nombre={skill} />
          ))}
        </div>
      </section>
      <section className="mb-5">
        <h2>Contacto rápido</h2>
        <p>
          Si querés trabajar juntos, <Link to="/contact">enviame un mensaje</Link> y respondere lo antes posible.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
