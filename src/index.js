import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import { ContextColumnProvider } from './context/contextColumn';
import { ContextFormProvider } from './context/contextForm';

ReactDOM.render(
  <React.StrictMode>
    <ContextColumnProvider>
      <ContextFormProvider>
        <App />
      </ContextFormProvider>
    </ContextColumnProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
