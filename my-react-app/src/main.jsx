import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TimerDisplay from './exercises/TimerDisplay.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TimerDisplay />
  </StrictMode>,
)
