import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Sidebar from './components/Sidebar.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar />
    <App />
  </StrictMode>,
)
