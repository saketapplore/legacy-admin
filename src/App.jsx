import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Dashboard from './pages/Dashboard/Dashboard'
import UserManagement from './pages/UserManagement/UserManagement'
import BrokerManagement from './pages/BrokerManagement/BrokerManagement'
import Payments from './pages/Payments/Payments'
import Documents from './pages/Documents/Documents'
import Support from './pages/Support/Support'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="broker-management" element={<BrokerManagement />} />
          <Route path="payments" element={<Payments />} />
          <Route path="documents" element={<Documents />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

