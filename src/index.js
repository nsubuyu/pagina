import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/cortinas.css";
import "./css/contact.css";
import "./css/header.css";
import "./css/footer.css";
import "./css/about.css";
import "./css/home.css";
import "./css/motores.css";
import "./css/elevadores.css";
import "./index.css";
import "aos/dist/aos.css"
import "./css/nuevo_pie.css";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);