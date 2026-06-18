import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const links = [
  { label: 'Home',      id: 'home' },
  { label: 'About',     id: 'about' },
  { label: 'Skills',    id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Projects',  id: 'projects' },
  { label: 'Contact',   id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('home');
  const { pathname }            = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = links.map(l => l.id);
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) setActive(id);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, id) => {
    if (pathname === '/') {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  
  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.lb}>&lt;</span>Pinak<span className={styles.lb}>/&gt;</span>
        </Link>

        <ul className={`${styles.menu} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.id}>
              <a
                href={`/#${l.id}`}
                className={`${styles.navA} ${active === l.id ? styles.active : ''}`}
                onClick={e => handleClick(e, l.id)}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        <button
          className={styles.burger}
          onClick={() => setOpen(o => !o)}
          aria-label="toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
