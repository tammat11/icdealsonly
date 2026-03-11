import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import StatsGrid from './components/StatsGrid';
import ServicesSection from './components/ServicesSection';
import ClientsMarquee from './components/ClientsMarquee';
import ApplicationForm from './components/ApplicationForm';
import Sidebars from './components/Sidebars';
import ThankYou from './components/ThankYou';

function MainPage({ onCalcOpen }: { onCalcOpen: () => void }) {
  return (
    <main className="relative z-10 w-full">
      <Hero onCalcOpen={onCalcOpen} />
      <StatsGrid />
      <ClientsMarquee />
      <ServicesSection />
      <ApplicationForm />
      <Sidebars />
    </main>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Timeout to ensure DOM is ready after route change
    setTimeout(() => {
      const revealElements = document.querySelectorAll('.on-reveal');
      revealElements.forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollToForm = () => {
    // If on main page, scroll. If not, maybe navigate? (For now assuming single page scroll logic is only needed on main)
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

      <Routes>
        <Route path="/" element={<MainPage onCalcOpen={scrollToForm} />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      <footer className="py-8 text-center bg-white border-t border-black/5 relative z-10">
        <p className="text-[10px] font-medium uppercase tracking-widest text-brand-dark/30">
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
