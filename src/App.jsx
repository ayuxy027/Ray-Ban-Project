import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Reports from './pages/Reports'
import Users from './pages/Users'
import Achievements from './pages/Achievements'
import Departments from './pages/Departments'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/users" element={<Users />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/departments" element={<Departments />} />
      </Routes>
    </Layout>
  )
}

export default App