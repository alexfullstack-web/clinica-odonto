import { clinic, contact } from '../data/clinic';
import { Logo } from './Header';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
  { href: '/politica-de-privacidade.html', label: 'Política de Privacidade' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>{clinic.tagline}</p>
        </div>

        <nav aria-label="Links do rodapé">
          <ul className="footer-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact">
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.instagram}</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {clinic.fullName}. Todos os direitos reservados.
        </span>
        <span>{clinic.technicalResponsible}</span>
      </div>
    </footer>
  );
}
