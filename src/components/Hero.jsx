import { hero, whatsappLink } from '../data/clinic';
import { useParallax } from '../hooks/useMotion';
import { Photo } from './ui';

export default function Hero({ ready }) {
  const parallaxRef = useParallax(26);

  return (
    <section id="inicio" className={`hero ${ready ? 'is-ready' : ''}`}>
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow hero-anim" style={{ '--i': 0 }}>
            Odontologia estética e reabilitadora
          </span>
          <h1 className="hero-anim" style={{ '--i': 1 }}>
            Seu sorriso merece <em>cuidado</em> especializado.
          </h1>
          <p className="hero-lead hero-anim" style={{ '--i': 2 }}>
            Odontologia moderna, atendimento humanizado e tecnologia para cuidar do seu sorriso com
            segurança e excelência.
          </p>
          <div className="hero-actions hero-anim" style={{ '--i': 3 }}>
            <a className="btn btn-primary btn-lg" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Agendar consulta
            </a>
            <a className="btn btn-ghost btn-lg" href="#tratamentos">
              Conhecer tratamentos
            </a>
          </div>
          <ul className="hero-points hero-anim" style={{ '--i': 4 }}>
            <li>Biossegurança rigorosa</li>
            <li>Planejamento individual</li>
            <li>Equipe multiespecialidade</li>
          </ul>
        </div>

        <div className="hero-media">
          <div className="hero-frame">
            <div className="hero-parallax" ref={parallaxRef}>
              <Photo
                name={hero.image}
                alt={hero.alt}
                position={hero.imagePosition}
                sizes="(max-width: 900px) 100vw, 46vw"
                eager
              />
            </div>
            <span className="hero-sheen" aria-hidden="true" />
          </div>
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            <div>
              <strong>Avaliação personalizada</strong>
              <small>Agende pelo WhatsApp</small>
            </div>
          </div>
        </div>
      </div>
      <a href="#jornada" className="scroll-hint" aria-label="Rolar para a próxima seção">
        <span />
      </a>
    </section>
  );
}
