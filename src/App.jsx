import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Employees from './pages/Employees'


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/Employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>

  )

}
export default App
