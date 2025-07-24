// ========================
// React Core Imports
// ========================
import React from 'react';
import ReactDOM from 'react-dom/client';

// ========================
// App and Utilities
// ========================
import App from './App';
import reportWebVitals from './reportWebVitals';

// ========================
// Global Styles
// ========================
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap core CSS
import './assets/css/style.css';                // Custom styles
import './assets/css/responsive.css';           // Responsive overrides

// ========================
// Mount React App
// ========================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ========================
// Performance Metrics (optional)
// ========================
// To log performance: pass a function like reportWebVitals(console.log)
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
