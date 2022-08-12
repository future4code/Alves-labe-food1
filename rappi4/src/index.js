import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Base } from './Components/Styles/Elements/Generic/Base';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Base />
    <App />
  </React.StrictMode>
);