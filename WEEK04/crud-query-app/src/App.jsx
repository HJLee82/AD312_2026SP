import { useState } from 'react'
import PostList from './PostList'
import CreatePost from './CreatePost'
import PatchPost from './PatchPost'
import FilterPost from './FilterPost'
import './App.css'

export default function App() {
  const [selectedId, setSelectedId] = useState(null)
  const [openSection, setOpenSection] = useState(null)

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <div className="app">
      <div className="left-panel">
        <div className="dropdown">
          <button className="dropdown-btn" onClick={() => toggle('create')}>Create Post {openSection === 'create' ? '▲' : '▼'}</button>
          {openSection === 'create' && <CreatePost />}
        </div>
        <div className="dropdown">
          <button className="dropdown-btn" onClick={() => toggle('patch')}>Patch Post {openSection === 'patch' ? '▲' : '▼'}</button>
          {openSection === 'patch' && <PatchPost />}
        </div>
        <div className="dropdown">
          <button className="dropdown-btn" onClick={() => toggle('filter')}>Filter by User ID {openSection === 'filter' ? '▲' : '▼'}</button>
          {openSection === 'filter' && <FilterPost />}
        </div>
      </div>
      <div className="right-panel">
        <PostList onSelect={setSelectedId} />
      </div>
    </div>
  )
}