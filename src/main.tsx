import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import Login from './features/Login/index.tsx';
import 'normalize.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
);
