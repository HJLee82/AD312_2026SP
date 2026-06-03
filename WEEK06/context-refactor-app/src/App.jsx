import { UserProvider } from './context/UserContext'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <UserProvider>
      <div className="app">
        <h1>User Settings App</h1>
        <Dashboard />
      </div>
    </UserProvider>
  )
}

export default App