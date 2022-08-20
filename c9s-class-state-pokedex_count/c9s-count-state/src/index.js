import React from 'react';
import ReactDOM from 'react-dom/client';

import Contador from "./componentes/Contador"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contador/> 
  </React.StrictMode>
);