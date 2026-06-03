import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function UserProfile() {
  const { user } = useContext(UserContext)

  if (!user) {
    return (
      <div className="user-profile">
        <p>No user data available.</p>
      </div>
    )
  }

  const validThemes = ['light', 'dark']
  const theme = validThemes.includes(user.themePreference.toLowerCase())
    ? user.themePreference.toLowerCase()
    : 'unknown'

  return (
    <div className="user-profile">
      <h4>User Profile</h4>
      <p><strong>Name:</strong> {user.name || 'No name provided'}</p>
      <p><strong>Email:</strong> {user.email || 'No email provided'}</p>
      <p><strong>Theme:</strong> {theme}</p>
    </div>
  )
}

export default UserProfile