import { Routes, Route, useNavigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import PostView from './pages/PostView'

function NotFound() {
  const navigate = useNavigate()
  return (
    <div style={{textAlign:'center', marginTop:'60px'}}>
      <h2>404 - Page Not Found</h2>
      <button className="back-btn" onClick={() => navigate('/')}>← Return to Feed</button>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="post/:postId" element={<PostView />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App