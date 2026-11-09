import { Link } from 'react-router-dom';

const links = [
  { label: 'Courses', hash: 'courses' },
  { label: 'Clubs', hash: 'clubs' },
  { label: 'Honor Society', hash: 'honor' },
  { label: 'Projects', hash: 'projects' },
  { label: 'Contact', hash: 'contact' },
];

export default function Header() {
  return (
    <header className="site-header container">
      <Link to="/" className="brand">
        <img src="/images/cs-logo.png" alt="HSE Computer Science logo" />
        <span>HSE Computer Science</span>
      </Link>
      <nav aria-label="Main" className="site-nav">
        {links.map((l) => (
          <Link key={l.hash} to={`/#${l.hash}`}>
            {l.label}
          </Link>
        ))}
        <Link to="/#honor" className="btn btn-red btn-small">
          Apply to CSHS
        </Link>
      </nav>
    </header>
  );
}
