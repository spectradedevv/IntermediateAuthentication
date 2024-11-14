import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './context/AuthProvider'
import App from './App'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  
    <AuthProvider>
      <Routes>
    
    <Route path="/*" element={<App/>}/>
    </Routes>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
