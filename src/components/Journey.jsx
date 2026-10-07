import { useEffect, useState } from 'react';
import { journey } from '../data/clinic';
import { useInView, prefersReducedMotion } from '../hooks/useMotion';
import { Photo, SectionHeading } from './ui';

const DURATION = 5200;

/** Apresentação automática das etapas do atendimento, com crossfade e zoom lento. */
export default function Journey() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (!inView || paused || prefersReducedMotion()) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % journey.length), DURATION);
    return () => clearTimeout(t);
  }, [active, inView, paused]);

  return (
    <section id="jornada" className="journey section-dark">
      <div className="container">
        <SectionHeading
          light
          eyebrow="Sua jornada"
          title="Do primeiro contato ao sorriso que você deseja"
          text="Cada etapa é conduzida com atenção, transparência e técnica — para que você saiba exatamente o que esperar."
        />

        <div
          ref={ref}
          className={`journey-grid ${paused ? 'is-paused' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ '--duration': `${DURATION}ms` }}
        >
          <div className="journey-stage" aria-live="polite">
            {journey.map((item, i) => (
              <figure key={item.step} className={`journey-slide ${i === active ? 'is-active' : ''}`} aria-hidden={i !== active}>
                <Photo name={item.image} alt={item.alt} position={item.position} sizes="(max-width: 900px) 100vw, 58vw" />
              </figure>
            ))}
            <div className="journey-caption">
              <span>{journey[active].step}</span>
              {journey[active].title}
            </div>
          </div>

          <ol className="journey-steps">
            {journey.map((item, i) => (
              <li key={item.step}>
                <button
                  className={`journey-step ${i === active ? 'is-active' : ''} ${i < active ? 'is-done' : ''}`}
                  onClick={() => setActive(i)}
                  aria-current={i === active ? 'step' : undefined}
                >
                  <span className="journey-num">{item.step}</span>
                  <span className="journey-text">
                    <strong>{item.title}</strong>
                    <span><span>{item.text}</span></span>
                  </span>
                  <span className="journey-progress" aria-hidden="true">
                    <span key={i === active ? `a${active}` : 'idle'} />
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
