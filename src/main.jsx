import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
<Auth0Provider
  domain="dev-ldaa5mwuhu8qclfy.us.auth0.com"
  clientId="YmwJPs7E7QliKc8xFqWjGuu8tRqIW1NP"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  
    <App />
    </Auth0Provider>

  
);
