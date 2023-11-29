import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import fbConfig from './firebase/FirebaseConfig';
import { initializeApp } from 'firebase/app';
import App from './App.jsx'
import './index.css'

const app = initializeApp(fbConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
