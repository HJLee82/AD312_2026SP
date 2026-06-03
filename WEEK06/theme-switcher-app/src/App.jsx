import { useContext } from 'react'
import { ThemeProvider, ThemeContext } from './context/ThemeContext'
import ThemeSwitcher from './components/ThemeSwitcher'

function AppContent() {
  const context = useContext(ThemeContext)

  if (!context) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <p>ThemeContext not available.</p>
      </div>
    )
  }


  const { theme } = context

  return (
    <div className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
      <nav>
        <span className="nav-logo">Theme Switcher App</span>
        <ThemeSwitcher />
      </nav>
      <div className="content">
        <h1>Global Theme Switcher</h1>
        <p>Click the button in the nav bar to toggle between light and dark mode.</p>
        <div className="card">
          <h2>Sample Card</h2>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App