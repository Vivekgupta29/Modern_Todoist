import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UniversalContextProvider } from './components/UniversalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UniversalContextProvider>
      <App />
    </UniversalContextProvider>
  </StrictMode>,
)
