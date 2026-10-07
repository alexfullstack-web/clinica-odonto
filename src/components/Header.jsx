import { useEffect, useState } from 'react';
import { clinic, nav, whatsappLink } from '../data/clinic';

export function Logo({ light = false }) {
  return (
    <a href="#inicio" className={`logo ${light ? 'is-light' : ''}`} aria-label={`${clinic.fullName} — início`}>
      <span className="logo-mark" aria-hidden="true">
        <span />
      </span>
      <span className="logo-text">
        <small>Clínica</small>
        {clinic.name}
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Destaca o item do menu da seção visível
  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container header-inner">
        <Logo />

        <nav className="nav" aria-label="Menu principal">
          <ul id="menu-principal">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? 'is-active' : ''}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary nav-cta-mobile" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            Agendar consulta
          </a>
        </nav>

        <a className="btn btn-primary header-cta" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          Agendar consulta
        </a>

        <button
          className="burger"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
