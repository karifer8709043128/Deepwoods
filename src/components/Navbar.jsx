import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          GreenPositive
        </Link>
        
        <div className="navbar-links">
          <NavLink to="/" text="Home" />
          <NavLink to="/campaign" text="Campaign" />
          <NavLink to="/contact" text="Contact" />
          
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, text }) {
  return (
    <Link to={to} className="nav-link">
      {text}
    </Link>
  );
}