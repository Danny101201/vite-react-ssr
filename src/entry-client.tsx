import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { hydrateRoot } from 'react-dom/client';
const container = document.getElementById('app') as HTMLElement;
const root = hydrateRoot(
  container,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
