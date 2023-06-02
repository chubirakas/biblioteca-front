import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
//pega o elemento com base no id(root, nesse caso. que está no index.html do projects)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


