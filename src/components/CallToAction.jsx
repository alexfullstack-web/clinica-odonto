import { whatsappLink } from '../data/clinic';
import { useParallax } from '../hooks/useMotion';
import { Photo, Reveal, WhatsAppIcon } from './ui';

export default function CallToAction() {
  const parallaxRef = useParallax(40);

  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta-bg" aria-hidden="true">
        <div className="hero-parallax" ref={parallaxRef}>
          <Photo name="consultorio-amplo" alt="" position="50% 40%" sizes="100vw" />
        </div>
      </div>
      <div className="container cta-inner">
        <Reveal>
          <span className="eyebrow is-light">Agende sua avaliação</span>
          <h2 id="cta-title">Pronto para cuidar melhor do seu sorriso?</h2>
          <p>Agende sua avaliação e descubra o tratamento ideal para você.</p>
          <a className="btn btn-whatsapp btn-lg" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Agendar pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
