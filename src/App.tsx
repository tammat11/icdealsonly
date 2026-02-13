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
gsap.config({ force3D: true });

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    // Enable better mobile scroll handling
    ScrollTrigger.normalizeScroll(true);

    const refreshTrigger = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', refreshTrigger);

    // Use debounced or limited resize
    let resizeTimer: any;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
    };
    window.addEventListener('resize', handleResize);

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
            duration: 1,
            ease: "power2.out",
            overwrite: 'auto'
          }
        );
      });

      ScrollTrigger.refresh();
    }, mainRef);

    return () => {
      ctx.revert();
      ScrollTrigger.normalizeScroll(false);
      window.removeEventListener('load', refreshTrigger);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={mainRef} className="min-h-screen bg-white relative selection:bg-brand-green/20 w-full">
      {/* --- Global Background Layer (Prevents Seams) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle Grid Pattern */}
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
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-marquee-reverse { animation: marquee 30s linear infinite reverse; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

export default App;
