import { results } from '../data/clinic';
import { Photo, Reveal, SectionHeading } from './ui';

function Slot({ name, label, treatment }) {
  if (name) {
    return (
      <div className="result-slot">
        <Photo name={name} alt={`${treatment} — ${label}`} sizes="(max-width: 900px) 50vw, 18vw" />
        <span className="result-tag">{label}</span>
      </div>
    );
  }
  return (
    <div className="result-slot is-empty">
      <span className="result-tag">{label}</span>
      <p>
        Foto real autorizada
        <small>pendente</small>
      </p>
    </div>
  );
}

export default function Results() {
  return (
    <section id="resultados" className="section results">
      <div className="container">
        <SectionHeading
          eyebrow="Resultados"
          title="Casos reais, apresentados com responsabilidade"
          text="Esta área exibe apenas fotografias reais de pacientes da clínica, publicadas mediante autorização por escrito e de acordo com as normas do Conselho Federal de Odontologia."
        />

        <div className="results-grid">
          {results.map((r, i) => (
            <Reveal as="article" key={r.treatment} className="result-card" delay={i * 100}>
              <div className="result-pair">
                <Slot name={r.before} label="Antes" treatment={r.treatment} />
                <Slot name={r.after} label="Depois" treatment={r.treatment} />
              </div>
              <div className="result-meta">
                <strong>{r.treatment}</strong>
                <span>Resultados variam de acordo com cada caso.</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
