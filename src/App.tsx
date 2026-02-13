import { useEffect } from 'react';
import Hero from './components/Hero';
import StatsGrid from './components/StatsGrid';
import ServicesSection from './components/ServicesSection';
import ClientsMarquee from './components/ClientsMarquee';
import ApplicationForm from './components/ApplicationForm';
import Sidebars from './components/Sidebars';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once visible, we can stop observing this element
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.on-reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white relative selection:bg-brand-green/20 w-full">
      {/* --- Global Background Layer (Prevents Seams) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }} />
      </div>

      <main className="relative z-10 w-full">
        <Hero onCalcOpen={scrollToForm} />
        <StatsGrid />
        <ClientsMarquee />
        <ServicesSection />
        <ApplicationForm />
        <Sidebars />
      </main>

      <footer className="py-8 text-center bg-white border-t border-black/5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/30">
          © {new Date().getFullYear()} IC GROUP. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
        </p>
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

export default App;
