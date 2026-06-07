import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/index.css'
import App from './App.jsx'
import { Cartprovider } from './context/Cartcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cartprovider>
      <App />
    </Cartprovider>
  </StrictMode>
)
