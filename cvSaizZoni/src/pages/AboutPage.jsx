import React, { useState } from 'react';
import SkillBadge from '../components/SkillBadge';

const AboutPage = () => {
  const [descripcion] = useState(
    'Soy una desarrolladora frontend apasionada por crear interfaces limpias, accesibles y fáciles de usar. Me especializo en React, HTML, CSS y diseño responsive.'
  );

  const [experiencia] = useState([
    {
      id: 1,
      puesto: 'Desarrolladora Frontend Junior',
      empresa: 'Agencia Web Local',
      periodo: '2024 - Actualidad',
      descripcion: 'Desarrollo de landing pages, componentes reutilizables y optimización para móviles.',
    },
    {
      id: 2,
      puesto: 'Practicante de Desarrollo',
      empresa: 'Startup de Educación',
      periodo: '2023 - 2024',
      descripcion: 'Colaboré en la creación de una app de cursos online y mejoré la experiencia del usuario.',
    },
  ]);

  const [educacion] = useState([
    {
      id: 1,
      titulo: 'Tecnicatura en Programación',
      institucion: 'Instituto de Tecnología',
      periodo: '2022 - 2024',
    },
    {
      id: 2,
      titulo: 'Curso de React y SPA',
      institucion: 'Bootcamp Online',
      periodo: '2023',
    },
  ]);

  const [habilidades] = useState(['React', 'JavaScript', 'Bootstrap', 'HTML', 'CSS', 'Git', 'Responsive Design']);

  return (
    <div>
      <section className="mb-5">
        <h2>Sobre mí</h2>
        <p>{descripcion}</p>
      </section>
      {experiencia.length > 0 && (
        <section className="mb-5">
          <h2>Experiencia</h2>
          <div className="list-group mt-3">
            {experiencia.map((item) => (
              <div className="list-group-item" key={item.id}>
                <h5>{item.puesto}</h5>
                <p className="mb-1">{item.empresa} · {item.periodo}</p>
                <p className="mb-0">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {educacion.length > 0 && (
        <section className="mb-5">
          <h2>Educación</h2>
          <div className="list-group mt-3">
            {educacion.map((item) => (
              <div className="list-group-item" key={item.id}>
                <h5>{item.titulo}</h5>
                <p className="mb-1">{item.institucion}</p>
                <p className="mb-0">{item.periodo}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      <section className="mb-5">
        <h2>Habilidades</h2>
        <div className="d-flex flex-wrap mt-3">
          {habilidades.map((skill) => (
            <SkillBadge key={skill} nombre={skill} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
