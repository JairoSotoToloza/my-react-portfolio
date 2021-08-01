import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header'; // Se importa la ruta del header creado en components. Nota: Los componentes deben comenzar con mayuscula en la primera letra.
import About from './components/about/about';
import Resume from './components/resume/resume';

ReactDOM.render(
  <React.StrictMode>
    <Header />, 
    <About />,
    <Resume />,
  </React.StrictMode>,
  document.getElementById('root')
);
