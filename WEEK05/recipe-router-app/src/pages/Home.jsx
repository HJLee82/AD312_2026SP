import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Recipe App</h1>
      <p>Let's become a chef!</p>
      <Link to="/gallery" className="gallery-btn">Browse Recipes →</Link>
    </div>
  )
}

export default Home