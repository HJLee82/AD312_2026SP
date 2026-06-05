import useLocalStorage from './hooks/useLocalStorage'
import ThemeSwitcher from './components/ThemeSwitcher'

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
      <nav>
        <span className="nav-logo">Theme Switcher App</span>
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </nav>
      <div className="content">
        <h1>LocalStorage Theme Switcher</h1>
        <p>Click the button in the nav bar to toggle between light and dark mode.</p>
        <div className="card">
          <h2>Sample Card</h2>
        </div>
      </div>
    </div>
  )
}

export default App