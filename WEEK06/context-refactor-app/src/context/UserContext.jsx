import { createContext, useState } from 'react'

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Hyejin Lee',
    email: 'HJLee@nsc.edu',
    themePreference: 'Dark'
  }, )

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}