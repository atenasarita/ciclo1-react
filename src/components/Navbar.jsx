import { Link } from 'react-router-dom';

export default function Navbar({ links }) {
  return (
    <nav className="navbar">
      {links.map(({ label, to }, i) => (
        <Link key={i} to={to}>{label}</Link>
      ))}
    </nav>
  );
}
