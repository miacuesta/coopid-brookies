import { navLinks } from '../data/content';
import { asset } from '../utils/asset';

export default function Nav() {
  return (
    <header className="nav">
      <a href="#" className="nav__logo" aria-label="coopid inicio">
        <img src={asset('img/cupid-brookie.png')} alt="" />
      </a>
      <nav className="nav__links">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
    </header>
  );
}
