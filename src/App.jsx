import { useCallback, useState } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import Journey from './components/Journey';
import About from './components/About';
import Treatments from './components/Treatments';
import Structure from './components/Structure';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { whatsappLink } from './data/clinic';
import { WhatsAppIcon } from './components/ui';

export default function App() {
  const [loading, setLoading] = useState(true);
  const done = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <Loader onDone={done} />}
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero ready={!loading} />
        <Journey />
        <About />
        <Treatments />
        <Structure />
        <Results />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <a
        className="whatsapp-float"
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
      >
        <WhatsAppIcon size={26} />
      </a>
    </>
  );
}
