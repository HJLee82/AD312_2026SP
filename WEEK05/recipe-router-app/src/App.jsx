import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import RecipeDetail from './pages/RecipeDetail'

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h2>404 - Page Not Found</h2>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="recipe/:id" element={<RecipeDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App