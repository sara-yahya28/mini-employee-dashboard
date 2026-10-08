import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Employees from './pages/Employees'
import Layout from './components/Layout'
import ProtectedRoutes from './components/ProtectedRoutes'
import { AuthProvider } from './context/AuthContext'
import {  ThemeProvider } from './context/ThemeContext'

function App() {
  return (
   <ThemeProvider>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Layout />}>
          {/* paths are nested in layout, treated like main one */}
          <Route index element={<Dashboard />} />

          <Route path='employees' element={<Employees />} />
          {/* path without /, since its nested path, not main one */}
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
    
  )
}
export default App
