import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NavermapsProvider } from 'react-naver-maps';

ReactDOM.createRoot(document.getElementById('root')).render(
    <NavermapsProvider>
      <App />
    </NavermapsProvider>
)
