import { useRef } from 'react';

const Hero = ({ onCalcOpen }: { onCalcOpen?: () => void }) => {
    const root = useRef<HTMLDivElement>(null);

    return (
        <section ref={root} className="relative h-screen min-h-[100dvh] flex flex-col items-center justify-center pt-10 pb-10 px-6 overflow-hidden bg-white">

            {/* --- Premium Background Layer --- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Mesh Gradient / Blobs */}
                <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-brand-green/5 rounded-full blur-[40px] md:blur-[80px] animate-float-slow" />
                <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-blue-900/[0.03] rounded-full blur-[40px] md:blur-[80px] animate-float-medium" />
                <div className="absolute top-[40%] right-[15%] w-[20vw] h-[20vw] bg-brand-green/[0.03] rounded-full blur-[30px] md:blur-[60px] animate-float-slow" />

                {/* 🫧 Bubbles Particles 🫧 */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute rounded-full bg-white/20 border border-brand-green/20 ${i > 4 ? 'hidden md:block' : ''} md:shadow-[0_8px_32px_0_rgba(162,192,55,0.05)] animate-float-slow`}
                            style={{
                                width: Math.random() * 60 + 30 + 'px',
                                height: Math.random() * 60 + 30 + 'px',
                                left: Math.random() * 100 + '%',
                                top: Math.random() * 100 + '%',
                                opacity: 0.4,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${10 + Math.random() * 10}s`
                            }}
                        />
                    ))}
                </div>
            </div>



            <div className="max-w-7xl mx-auto text-center relative z-10 w-full flex flex-col items-center">

                <div className="mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <img src="/logo-center-back.png" alt="IC GROUP" className="h-24 md:h-36 w-auto object-contain" />
                </div>

                {/* Ultra-tight Minimalist Heading */}
                <h1 className="flex flex-col items-center mb-6 select-none font-semibold tracking-tighter uppercase whitespace-nowrap leading-[0.8] relative z-20">
                    <span className="on-reveal stagger-1 block text-[clamp(48px,11vw,104px)] text-brand-dark">
                        Создать
                    </span>
                    <span className="on-reveal stagger-2 block text-[clamp(56px,13vw,118px)] text-brand-green relative inline-block px-4 py-1 overflow-visible group">

                        <span className="relative z-20">
                            Чистоту
                        </span>

                        {/* 🧼 Cleaning Elements Container (Front layer, shifted far right) */}
                        <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[20%] h-full pointer-events-none z-[70]">

                            {/* 🌫️ The Dirt Spot (Medium) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 md:w-24 h-14 md:h-24 animate-cleaner-dirt mix-blend-multiply opacity-0">
                                <svg viewBox="0 0 200 200" className="w-full h-full text-[#5c6066] fill-current">
                                    <path d="M41.7,-72.4C53.4,-64.7,62.1,-53.4,68.9,-41.4C75.7,-29.4,80.6,-16.7,81.1,-3.7C81.6,9.3,77.7,22.6,71.2,34.8C64.7,47,55.6,58.1,44.4,66.5C33.2,74.9,19.9,80.6,6.1,80.9C-7.7,81.2,-21.9,76.1,-34.5,68.9C-47.1,61.7,-58.1,52.4,-66.4,41.2C-74.7,30,-80.3,16.9,-81.1,3.4C-81.9,-10.1,-77.9,-24,-69.9,-35.8C-61.9,-47.6,-49.9,-57.3,-37.4,-64.5C-24.9,-71.7,-11.9,-76.4,2.1,-79.8C16.1,-83.2,30,-80.1,41.7,-72.4Z" transform="translate(100 100)" />
                                </svg>
                            </div>

                            {/* ✨ The Clean Sparkle (Smaller) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 opacity-0 flex items-center justify-center animate-cleaner-sparkle">
                                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white drop-shadow-[0_0_20px_rgba(162,192,55,0.3)]">
                                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor" />
                                </svg>
                            </div>

                            {/* ✋ The Cleaning Cloth (Even Larger) */}
                            <img
                                src="/rag.png"
                                alt="Cleaning"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-auto opacity-0 animate-cleaner-hand"
                            />
                        </div>
                    </span>
                    <span className="on-reveal stagger-3 block text-[clamp(48px,11vw,104px)] text-brand-dark">
                        Во всем
                    </span>
                </h1>

                <div className="max-w-2xl mb-4 on-reveal stagger-4 text-center">
                    <p className="text-base md:text-xl font-medium text-brand-dark/50 tracking-tight leading-tight">
                        Лидер профессионального клининга в Казахстане.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-3 on-reveal stagger-5">
                    <p className="text-[10px] md:text-xs font-medium text-brand-dark/50 tracking-[0.25em] uppercase">
                        Мы работаем только с корпоративным сегментом
                    </p>
                    <button
                        onClick={onCalcOpen}
                        className="btn-gloss group relative px-8 py-4 md:px-12 md:py-6 overflow-hidden rounded-full transition-all duration-500 hover:scale-110 active:scale-95 shadow-xl shadow-brand-dark/10"
                    >
                        <div className="absolute inset-0 bg-brand-dark group-hover:bg-brand-green transition-colors duration-700" />
                        <span className="relative z-10 text-white text-[10px] md:text-xs font-medium uppercase tracking-[0.3em]">Оставить заявку</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
