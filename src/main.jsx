import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';


const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
   
    </StrictMode>
  );
} else {
  console.error('Root element with ID "root" not found.');
  // Optionally, you can display an error message on the page or take other actions.
}