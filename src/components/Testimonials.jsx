import { testimonials } from '../data/clinic';
import { Reveal, SectionHeading } from './ui';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Depoimentos"
          title="A experiência de quem confia no nosso cuidado"
          align="center"
        />
        <p className="placeholder-note center">Textos de exemplo — substituir por depoimentos reais e autorizados.</p>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <Reveal as="figure" key={i} className="testimonial" delay={i * 110}>
              <span className="quote-mark" aria-hidden="true">“</span>
              <blockquote>{t.text}</blockquote>
              <figcaption>
                <span className="testimonial-initial" aria-hidden="true">
                  {t.name.replace(/[^A-Za-zÀ-ú]/g, '').charAt(0) || 'P'}
                </span>
                <span>
                  <strong>{t.name}</strong>
                  <small>{t.detail}</small>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
