import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-logo">My Blog</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout