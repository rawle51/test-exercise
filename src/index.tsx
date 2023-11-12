import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/App/App';
import { server } from './services/serverMock.service';

server();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
