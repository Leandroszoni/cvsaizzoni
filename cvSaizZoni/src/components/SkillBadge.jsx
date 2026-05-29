import React from 'react';
import PropTypes from 'prop-types';

const SkillBadge = ({ nombre }) => {
  return (
    <span className="badge bg-primary text-uppercase me-1 mb-1" style={{ fontSize: '0.8rem' }}>
      {nombre}
    </span>
  );
};

SkillBadge.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default SkillBadge;
