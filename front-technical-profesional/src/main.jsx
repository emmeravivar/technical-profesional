import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { makeServer } from "./server/mirage/server.js"
import { Provider } from 'react-redux';
import { store } from './store';
// import './index.css'
import './styles/main.scss';

import App from './App.jsx'

if (import.meta.env.MODE === 'development') {
  makeServer({ environment: "development" })
  };
  



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
