import { about } from '../data/clinic';
import { useCountUp, useInView, useParallax } from '../hooks/useMotion';
import { Photo, Reveal, SectionHeading } from './ui';

function Stat({ value, prefix, suffix, label, start }) {
  const n = useCountUp(value, start);
  return (
    <div className="stat">
      <strong>
        {prefix}
        {n.toLocaleString('pt-BR')}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

const icons = [
  'M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.6 7.1 18.2l.9-5.5-4-3.9 5.5-.8z',
  'M4 7h16v10H4zM9 21h6M12 17v4',
  'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0',
  'M3 12l9-8 9 8M5 10v10h14V10',
  'M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z',
];

export default function About() {
  const [statsRef, statsIn] = useInView({ threshold: 0.4 });
  const parallaxRef = useParallax(22);

  return (
    <section id="sobre" className="section about">
      <div className="container about-grid">
        <Reveal className="about-media">
          <div className="about-frame">
            <div className="hero-parallax" ref={parallaxRef}>
              <Photo name={about.image} alt={about.alt} position={about.imagePosition} sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
          </div>
          <div className="about-accent" aria-hidden="true" />
        </Reveal>

        <div className="about-copy">
          <SectionHeading
            eyebrow="Sobre a clínica"
            title="Odontologia com tecnologia e cuidado humano"
            text="Acreditamos que um bom tratamento começa pela confiança. Por isso, unimos técnica atualizada, equipamentos modernos e um atendimento próximo, em que cada paciente é ouvido com atenção."
          />

          <ul className="pillars">
            {about.pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 70} className="pillar">
                <span className="pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icons[i % icons.length]} />
                  </svg>
                </span>
                <div>
                  <strong>{p.title}</strong>
                  <span>{p.text}</span>
                </div>
              </Reveal>
            ))}
          </ul>

          <div ref={statsRef} className="stats">
            {about.stats.map((s) => (
              <Stat key={s.label} {...s} start={statsIn} />
            ))}
          </div>
          <p className="placeholder-note">{about.statsNote}</p>
        </div>
      </div>
    </section>
  );
}
