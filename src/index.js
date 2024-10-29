import React from 'react';
import ReactDOM from 'react-dom/client';
import { TaskProvider } from './Context/TaskContext';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TaskProvider>
    <App />
  </TaskProvider>
);
