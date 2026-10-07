import { contact, whatsappLink } from '../data/clinic';
import { Reveal, SectionHeading, WhatsAppIcon } from './ui';

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

const paths = {
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2',
  mail: 'M3 6h18v12H3zM3 7l9 6 9-6',
  pin: 'M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4z',
  clock: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2',
};

export default function Contact() {
  return (
    <section id="contato" className="section contact">
      <div className="container contact-grid">
        <div>
          <SectionHeading
            eyebrow="Contato"
            title="Estamos prontos para receber você"
            text="Fale com a nossa equipe para tirar dúvidas ou agendar sua avaliação."
          />

          <Reveal as="ul" className="contact-list">
            <li>
              <span className="contact-icon is-whatsapp"><WhatsAppIcon size={18} /></span>
              <div>
                <small>WhatsApp</small>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">{contact.whatsappDisplay}</a>
              </div>
            </li>
            <li>
              <span className="contact-icon"><Icon d={paths.phone} /></span>
              <div>
                <small>Telefone</small>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </div>
            </li>
            <li>
              <span className="contact-icon"><Icon d={paths.mail} /></span>
              <div>
                <small>E-mail</small>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </li>
            <li>
              <span className="contact-icon"><Icon d={paths.pin} /></span>
              <div>
                <small>Endereço</small>
                <address>
                  {contact.address}
                  <br />
                  {contact.city}
                </address>
              </div>
            </li>
            <li>
              <span className="contact-icon"><Icon d={paths.clock} /></span>
              <div>
                <small>Horário de atendimento</small>
                {contact.hours.map((h) => (
                  <p key={h.days}>
                    {h.days}: <strong>{h.time}</strong>
                  </p>
                ))}
              </div>
            </li>
          </Reveal>
        </div>

        <Reveal className="map" delay={150}>
          {contact.mapsEmbedUrl ? (
            <iframe
              title="Localização da clínica no Google Maps"
              src={contact.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="map-placeholder">
              <span className="map-pin" aria-hidden="true"><Icon d={paths.pin} /></span>
              <strong>Google Maps</strong>
              <p>
                Cole o link de incorporação do mapa em <code>contact.mapsEmbedUrl</code>
                <br />no arquivo <code>src/data/clinic.js</code>.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
