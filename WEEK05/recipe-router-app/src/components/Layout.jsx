import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-logo">Recipe App</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout