import { useEffect, useState } from 'react';
import { clinic } from '../data/clinic';

/** Tela de carregamento: anel de luz (referência ao refletor odontológico) + logo. */
export default function Loader({ onDone }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLeaving(true), 1700);
    const t2 = setTimeout(() => onDone?.(), 2350);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <div className={`loader ${leaving ? 'is-leaving' : ''}`} role="status" aria-label="Carregando site">
      <div className="loader-inner">
        <div className="loader-mark" aria-hidden="true">
          <svg viewBox="0 0 120 120">
            <circle className="loader-track" cx="60" cy="60" r="52" />
            <circle className="loader-ring" cx="60" cy="60" r="52" />
          </svg>
          <span className="loader-glow" />
          <span className="loader-core" />
        </div>
        <p className="loader-name">{clinic.fullName}</p>
        <span className="loader-sub">Odontologia</span>
      </div>
    </div>
  );
}
