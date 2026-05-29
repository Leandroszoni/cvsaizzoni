import React, { useReducer, useState } from 'react';

const initialState = {
  nombre: '',
  email: '',
  mensaje: '',
};

const initialErrors = {
  nombre: '',
  email: '',
  mensaje: '',
};

const contactFormReducer = (state, action) => {
  switch (action.type) {
    case 'ACTUALIZAR_CAMPO':
      return { ...state, [action.campo]: action.valor };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const ContactPage = () => {
  const [formulario, dispatch] = useReducer(contactFormReducer, initialState);
  const [errores, setErrores] = useState(initialErrors);
  const [enviado, setEnviado] = useState(false);

  const validarCampo = (campo, valor) => {
    let mensaje = '';

    if (campo === 'nombre') {
      if (!valor.trim()) {
        mensaje = 'El nombre es obligatorio.';
      }
    }

    if (campo === 'email') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!valor.trim()) {
        mensaje = 'El email es obligatorio.';
      } else if (!regex.test(valor)) {
        mensaje = 'El email no es válido.';
      }
    }

    if (campo === 'mensaje') {
      if (!valor.trim()) {
        mensaje = 'El mensaje es obligatorio.';
      } else if (valor.trim().length < 10) {
        mensaje = 'El mensaje debe tener al menos 10 caracteres.';
      }
    }

    return mensaje;
  };

  const validarFormulario = () => {
    const nuevosErrores = {
      nombre: validarCampo('nombre', formulario.nombre),
      email: validarCampo('email', formulario.email),
      mensaje: validarCampo('mensaje', formulario.mensaje),
    };

    setErrores(nuevosErrores);
    return Object.values(nuevosErrores).every((error) => error === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      setEnviado(true);
      dispatch({ type: 'RESET' });
      setErrores(initialErrors);
      setTimeout(() => {
        setEnviado(false);
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'ACTUALIZAR_CAMPO', campo: name, valor: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrores((prev) => ({ ...prev, [name]: validarCampo(name, value) }));
  };

  const fieldClass = (campo) => {
    return 'form-control ' + (errores[campo] ? 'is-invalid' : formulario[campo] ? 'is-valid' : '');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 className="mb-4">Contacto</h2>

        {enviado && <div className="alert alert-success">¡Mensaje enviado correctamente!</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label" htmlFor="nombre">
              Nombre
            </label>
            <input
              type="text"
              className={fieldClass('nombre')}
              id="nombre"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className={fieldClass('email')}
              id="email"
              name="email"
              value={formulario.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.email && <div className="invalid-feedback">{errores.email}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              className={fieldClass('mensaje')}
              id="mensaje"
              name="mensaje"
              rows="4"
              value={formulario.mensaje}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.mensaje && <div className="invalid-feedback">{errores.mensaje}</div>}
          </div>

          <button type="submit" className="btn btn-primary me-2">
            Enviar
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              dispatch({ type: 'RESET' });
              setErrores(initialErrors);
            }}
          >
            Reiniciar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
