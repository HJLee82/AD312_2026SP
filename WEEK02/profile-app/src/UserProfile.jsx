import { useState } from 'react'
import './UserProfile.css'

export default function UserProfile() {
  const [userProfile, setUserProfile] = useState({
    name: "Jane Doe",
    email: "jane@example.com",
    address: {
      street: "123 Main St",
      city: "Seattle",
      country: "United Sates"
    }
  })

  const [inputs, setInputs] = useState({
    street: '',
    city: '',
    country: ''
  })

  const [history, setHistory] = useState([{
    street: "123 Main St",
    city: "Seattle",
    country: "United States"
  }])
  const [historyIndex, setHistoryIndex] = useState(0)

  
  const updateAddress = (street, city, country) => {
    const newAddress = {
      ...userProfile.address,
      street: street || userProfile.address.street,
      city: city || userProfile.address.city,
      country: country || userProfile.address.country
    }
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(newAddress)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
    setUserProfile({
      ...userProfile,
      address: newAddress
    })
    setInputs({ street: '', city: '', country: '' })
  }

  const handleUndo = () => {
    if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setUserProfile(prev => ({
            ...prev,
            address: history[newIndex]
            }))
        }
    }

    const handleRedo = () => {
        if (historyIndex < history.length - 1) {
            const newIndex = historyIndex + 1
            setHistoryIndex(newIndex)
            setUserProfile(prev => ({
                ...prev,
                address: history[newIndex]
                }))
        }
    }

  return (
    <div className="app">
      <div className="left-panel">
        <h2>Edit Address</h2>

        <div className="profile-info">
          <p className="profile-name">{userProfile.name}</p>
          <p className="profile-email">{userProfile.email}</p>
        </div>

        <div className="input-group">
          <label>Street</label>
          <input
            value={inputs.street}
            onChange={e => setInputs({ ...inputs, street: e.target.value })}
            placeholder="e.g. 1st Ave"
          />
        </div>
        <div className="input-group">
          <label>City</label>
          <input
            value={inputs.city}
            onChange={e => setInputs({ ...inputs, city: e.target.value })}
            placeholder="e.g. Busan"
          />
        </div>
        <div className="input-group">
          <label>Country</label>
          <input
            value={inputs.country}
            onChange={e => setInputs({ ...inputs, country: e.target.value })}
            placeholder="e.g. South Korea"
          />
        </div>

        <button
          className="update-btn"
          onClick={() => updateAddress(inputs.street, inputs.city, inputs.country)}
        >
          Update Address
        </button>
      </div>

      <div className="right-panel">
        <h2>Current Profile</h2>
        <div className="profile-card">
          <div className="card-top">
            <div>
              <p className="profile-name">{userProfile.name}</p>
              <p className="profile-email">{userProfile.email}</p>
            </div>
          </div>
          <hr className="divider" />
          <div className="info-row">
            <span className="info-label">Street</span>
            <span className="info-value">{userProfile.address.street}</span>
          </div>
          <div className="info-row">
            <span className="info-label">City</span>
            <span className="info-value">{userProfile.address.city}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Country</span>
            <span className="info-value">{userProfile.address.country}</span>
          </div>
        </div>

        <div className="undo-redo-btns">
          <button className="undo-btn" onClick={handleUndo}>Undo</button>
          <button className="redo-btn" onClick={handleRedo}>Redo</button>
        </div>
      </div>
    </div>
  )
}