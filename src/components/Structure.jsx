import { useCallback, useEffect, useRef, useState } from 'react';
import { structure } from '../data/clinic';
import { prefersReducedMotion } from '../hooks/useMotion';
import { ArrowIcon, Photo, Reveal, SectionHeading } from './ui';

const INTERVAL = 5000;

export default function Structure() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const total = structure.length;

  const go = useCallback((i) => setIndex((i + total) % total), [total]);

  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const t = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  const onKey = (e) => {
    if (e.key === 'ArrowRight') go(index + 1);
    if (e.key === 'ArrowLeft') go(index - 1);
  };

  return (
    <section id="estrutura" className="section structure">
      <div className="container">
        <SectionHeading
          eyebrow="Estrutura"
          title="Um ambiente pensado para o seu conforto"
          text="Espaços claros, organizados e equipados para oferecer segurança e tranquilidade do início ao fim da consulta."
          align="center"
        />

        <Reveal
          className="carousel"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Galeria da estrutura da clínica"
          tabIndex={0}
          onKeyDown={onKey}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current == null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
            touchX.current = null;
          }}
        >
          <div className="carousel-track">
            {structure.map((s, i) => (
              <figure
                key={s.title}
                className={`carousel-slide ${i === index ? 'is-active' : ''}`}
                aria-roledescription="slide"
                aria-label={`${i + 1} de ${total}: ${s.title}`}
                aria-hidden={i !== index}
              >
                {s.image ? (
                  <Photo name={s.image} alt={s.title} position={s.position} sizes="(max-width: 1100px) 100vw, 1100px" />
                ) : (
                  <div className="image-placeholder">
                    <span>Foto real — {s.title}</span>
                    <small>Adicione a imagem em /public/images e informe o nome em src/data/clinic.js</small>
                  </div>
                )}
                <figcaption>
                  <span className="carousel-count">
                    {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                  </span>
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="carousel-controls">
            <button className="carousel-arrow" onClick={() => go(index - 1)} aria-label="Foto anterior">
              <ArrowIcon dir="left" />
            </button>
            <div className="carousel-dots" role="tablist" aria-label="Escolher foto">
              {structure.map((s, i) => (
                <button
                  key={s.title}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={s.title}
                  className={i === index ? 'is-active' : ''}
                  onClick={() => go(i)}
                >
                  <span key={i === index ? `p${index}` : 'idle'} style={{ animationDuration: `${INTERVAL}ms` }} />
                </button>
              ))}
            </div>
            <button className="carousel-arrow" onClick={() => go(index + 1)} aria-label="Próxima foto">
              <ArrowIcon />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
