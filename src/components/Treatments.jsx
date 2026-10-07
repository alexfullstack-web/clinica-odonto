import { treatments, contact } from '../data/clinic';
import { Photo, Reveal, SectionHeading, ArrowIcon } from './ui';

const knowMoreLink = (title) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Olá! Gostaria de saber mais sobre ${title.toLowerCase()}.`
  )}`;

export default function Treatments() {
  return (
    <section id="tratamentos" className="section treatments">
      <div className="container">
        <div className="treatments-head">
          <SectionHeading
            eyebrow="Tratamentos"
            title="Cuidado completo para cada fase do seu sorriso"
          />
          <Reveal as="p" className="treatments-intro" delay={120}>
            Da prevenção à reabilitação, reunimos especialidades para que todo o seu tratamento aconteça
            em um só lugar, com o mesmo padrão de cuidado.
          </Reveal>
        </div>

        <div className="treatments-grid">
          {treatments.map((t, i) => (
            <Reveal as="article" key={t.title} className="treatment-card" delay={(i % 4) * 90}>
              <div className="treatment-media">
                <Photo
                  name={t.image}
                  alt={t.title}
                  position={t.position}
                  sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw"
                />
                <span className="treatment-index">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="treatment-body">
                <h3>{t.title}</h3>
                <p>{t.text}</p>
                <a
                  className="link-arrow"
                  href={knowMoreLink(t.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Saiba mais sobre ${t.title}`}
                >
                  Saiba mais <ArrowIcon />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
