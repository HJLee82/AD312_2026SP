import { useImmer } from 'use-immer'
import './UserProfile.css'

export default function UserProfileWithImmer() {
  const [profiles, updateProfiles] = useImmer([])
  const [editingId, setEditingId] = useImmer(null)
  const [newProfile, updateNewProfile] = useImmer({
    name: '',
    email: '',
    contactDetails: { phone: '', address: '' },
    preferences: { newsletter: false, notifications: false }
  })
  const [editForm, updateEditForm] = useImmer({
    name: '',
    email: '',
    contactDetails: { phone: '', address: '' },
    preferences: { newsletter: false, notifications: false }
  })

  const addProfile = () => {
    updateProfiles(draft => {
      draft.push({
        id: Date.now(),
        name: newProfile.name || 'New User',
        email: newProfile.email,
        contactDetails: {
          phone: newProfile.contactDetails.phone,
          address: newProfile.contactDetails.address
        },
        preferences: {
          newsletter: newProfile.preferences.newsletter,
          notifications: newProfile.preferences.notifications
        }
      })
    })
    updateNewProfile(draft => {
      draft.name = ''
      draft.email = ''
      draft.contactDetails.phone = ''
      draft.contactDetails.address = ''
      draft.preferences.newsletter = false
      draft.preferences.notifications = false
    })
  }

  const removeProfile = (id) => {
    updateProfiles(draft => {
      return draft.filter(p => p.id !== id)
    })
  }

  const updateContactDetails = (id) => {
    updateProfiles(draft => {
      const profile = draft.find(p => p.id === id)
      profile.name = editForm.name
      profile.email = editForm.email
      profile.contactDetails.phone = editForm.contactDetails.phone
      profile.contactDetails.address = editForm.contactDetails.address
      profile.preferences.newsletter = editForm.preferences.newsletter
      profile.preferences.notifications = editForm.preferences.notifications
    })
    setEditingId(null)
  }

  const toggleNewsletterSubscription = (id) => {
    updateProfiles(draft => {
      const profile = draft.find(p => p.id === id)
      profile.preferences.newsletter = !profile.preferences.newsletter
    })
  }

  const toggleNotifications = (id) => {
    updateProfiles(draft => {
      const profile = draft.find(p => p.id === id)
      profile.preferences.notifications = !profile.preferences.notifications
    })
  }

  const startEditing = (profile) => {
    setEditingId(profile.id)
    updateEditForm(draft => {
      draft.name = profile.name
      draft.email = profile.email
      draft.contactDetails.phone = profile.contactDetails.phone
      draft.contactDetails.address = profile.contactDetails.address
      draft.preferences.newsletter = profile.preferences.newsletter
      draft.preferences.notifications = profile.preferences.notifications
    })
  }

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  }

  return (
    <div className="app">
      <div className="left-panel">
        <h2>Add Profile</h2>

        <p className="section-divider">Basic Info</p>
        <div className="input-group">
          <label>Name</label>
          <input
            value={newProfile.name}
            onChange={e => updateNewProfile(draft => { draft.name = e.target.value })}
            placeholder="e.g. Jane Doe"
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            value={newProfile.email}
            onChange={e => updateNewProfile(draft => { draft.email = e.target.value })}
            placeholder="e.g. jane@example.com"
          />
        </div>

        <p className="section-divider">Contact Details</p>
        <div className="input-group">
          <label>Phone</label>
          <input
            value={newProfile.contactDetails.phone}
            onChange={e => updateNewProfile(draft => { draft.contactDetails.phone = e.target.value })}
            placeholder="e.g. 555-1234"
          />
        </div>
        <div className="input-group">
          <label>Address</label>
          <input
            value={newProfile.contactDetails.address}
            onChange={e => updateNewProfile(draft => { draft.contactDetails.address = e.target.value })}
            placeholder="e.g. 123 Main St"
          />
        </div>

        <p className="section-divider">Preferences</p>
        <div className="toggle-row">
          <label>Newsletter</label>
          <button
            className={`toggle-btn ${newProfile.preferences.newsletter ? 'on' : 'off'}`}
            onClick={() => updateNewProfile(draft => { draft.preferences.newsletter = !draft.preferences.newsletter })}
          >
            {newProfile.preferences.newsletter ? 'ON' : 'OFF'}
          </button>
        </div>
        <div className="toggle-row">
          <label>Notifications</label>
          <button
            className={`toggle-btn ${newProfile.preferences.notifications ? 'on' : 'off'}`}
            onClick={() => updateNewProfile(draft => { draft.preferences.notifications = !draft.preferences.notifications })}
          >
            {newProfile.preferences.notifications ? 'ON' : 'OFF'}
          </button>
        </div>

        <button className="add-btn" onClick={addProfile}>+ Add Profile</button>
      </div>

      <div className="right-panel">
        <h2>Profiles</h2>
        {profiles.length === 0 && (
          <p className="empty-msg">No profiles yet. Add one from the left panel!</p>
        )}
        {profiles.map(profile => (
          <div key={profile.id} className="profile-card">
            <div className="card-top">
              <div className="avatar">{getInitials(profile.name)}</div>
              <div>
                <p className="profile-name">{profile.name}</p>
                <p className="profile-email">{profile.email}</p>
              </div>
            </div>
            <hr className="divider" />
            <div className="info-row"><span className="info-label">Phone</span><span className="info-value">{profile.contactDetails.phone || '—'}</span></div>
            <div className="info-row"><span className="info-label">Address</span><span className="info-value">{profile.contactDetails.address || '—'}</span></div>
            <hr className="divider" />
            <div className="info-row">
              <span className="info-label">Newsletter</span>
              <span className={`badge ${profile.preferences.newsletter ? 'on' : 'off'}`}>{profile.preferences.newsletter ? 'On' : 'Off'}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Notifications</span>
              <span className={`badge ${profile.preferences.notifications ? 'on' : 'off'}`}>{profile.preferences.notifications ? 'On' : 'Off'}</span>
            </div>

            {editingId === profile.id && (
              <div className="edit-form">
                <div className="edit-row">
                  <div className="edit-field">
                    <label>Name</label>
                    <input value={editForm.name} onChange={e => updateEditForm(draft => { draft.name = e.target.value })} />
                  </div>
                  <div className="edit-field">
                    <label>Email</label>
                    <input value={editForm.email} onChange={e => updateEditForm(draft => { draft.email = e.target.value })} />
                  </div>
                </div>
                <div className="edit-row">
                  <div className="edit-field">
                    <label>Phone</label>
                    <input value={editForm.contactDetails.phone} onChange={e => updateEditForm(draft => { draft.contactDetails.phone = e.target.value })} />
                  </div>
                  <div className="edit-field">
                    <label>Address</label>
                    <input value={editForm.contactDetails.address} onChange={e => updateEditForm(draft => { draft.contactDetails.address = e.target.value })} />
                  </div>
                </div>
                <div className="edit-row" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="info-label">Newsletter</span>
                  <button
                    className={`toggle-btn ${editForm.preferences.newsletter ? 'on' : 'off'}`}
                    onClick={() => updateEditForm(draft => { draft.preferences.newsletter = !draft.preferences.newsletter })}
                  >
                    {editForm.preferences.newsletter ? 'ON' : 'OFF'}
                  </button>
                </div>
                <div className="edit-row" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="info-label">Notifications</span>
                  <button
                    className={`toggle-btn ${editForm.preferences.notifications ? 'on' : 'off'}`}
                    onClick={() => updateEditForm(draft => { draft.preferences.notifications = !draft.preferences.notifications })}
                  >
                    {editForm.preferences.notifications ? 'ON' : 'OFF'}
                  </button>
                </div>
                <button className="save-btn" onClick={() => updateContactDetails(profile.id)}>Save</button>
              </div>
            )}

            <div className="card-btns">
              <button className="card-btn" onClick={() => editingId === profile.id ? setEditingId(null) : startEditing(profile)}>
                {editingId === profile.id ? 'Cancel' : 'Update'}
              </button>
              <button className="card-btn delete" onClick={() => removeProfile(profile.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}