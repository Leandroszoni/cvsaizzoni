import { useState, useEffect } from 'react';

const useLocalStorage = (clave, valorInicial) => {
  const [valor, setValor] = useState(() => {
    try {
      const item = localStorage.getItem(clave);
      return item ? JSON.parse(item) : valorInicial;
    } catch (error) {
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
      console.error('Error guardando en localStorage:', error);
    }
  }, [clave, valor]);

  return [valor, setValor];
};

export default useLocalStorage;
