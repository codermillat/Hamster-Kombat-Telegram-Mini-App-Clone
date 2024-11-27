import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GameConfigProvider } from './context/GameConfigContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameConfigProvider>
      <App />
    </GameConfigProvider>
  </React.StrictMode>,
)