import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  const [tema, setTema] = useLocalStorage('tema', 'light');

  const toggleTema = () => {
    setTema((prevTema) => (prevTema === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={tema === 'dark' ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>
      <Navbar tema={tema} toggleTema={toggleTema} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage tema={tema} toggleTema={toggleTema} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
