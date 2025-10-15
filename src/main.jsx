// src/main.jsx (Updated)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // IMPORT THIS
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ADD THIS WRAPPER */}
      <App />
    </BrowserRouter> {/* ADD THIS WRAPPER */}
  </React.StrictMode>,
);