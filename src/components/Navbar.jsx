import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <Link to="/">Movie App</Link>
        </div>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/favorites" className="navbar-link">
            Favorites
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
