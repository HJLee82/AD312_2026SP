import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function ThemeSwitcher() {
  const context = useContext(ThemeContext)

  if (!context) {
    return <p>ThemeContext not available.</p>
  }

  const { theme, toggleTheme } = context

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  )
}

export default ThemeSwitcher