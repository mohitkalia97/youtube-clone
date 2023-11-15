import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-t375zistymyxwqyg.us.auth0.com"
    clientId="HUWOZwZDZqlewn5D4o7xV0eRGutqF1f2"
    redirectUri='http://localhost:3000/'>
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
