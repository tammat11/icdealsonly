import { useRef, useEffect } from 'react';
import Hero from './components/Hero';
import StatsGrid from './components/StatsGrid';
import ServicesSection from './components/ServicesSection';
import ClientsMarquee from './components/ClientsMarquee';
import ApplicationForm from './components/ApplicationForm';
import Sidebars from './components/Sidebars';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const refreshTrigger = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', refreshTrigger);
    window.addEventListener('resize', refreshTrigger);

    const ctx = gsap.context(() => {
      // reveal-section logic
      const reveals = document.querySelectorAll('.reveal-section');
      reveals.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true
            },
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out"
          }
        );
      });

      ScrollTrigger.refresh();
    }, mainRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
      window.removeEventListener('load', refreshTrigger);
      window.removeEventListener('resize', refreshTrigger);
    };
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={mainRef} className="min-h-screen bg-white relative selection:bg-brand-green/20 overflow-x-hidden w-full">
      {/* --- Global Background Layer (Prevents Seams) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }} />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <main className="relative z-10 w-full overflow-x-hidden">
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
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-marquee-reverse { animation: marquee 30s linear infinite reverse; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

export default App;
