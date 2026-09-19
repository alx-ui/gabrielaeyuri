import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/global.css';

import { App } from './App';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
