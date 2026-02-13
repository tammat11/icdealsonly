import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ onCalcOpen }: { onCalcOpen?: () => void }) => {
    const root = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Organic reveal
            gsap.fromTo(".hero-title-reveal",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out"
                }
            );

            gsap.fromTo(".hero-fade-in",
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.4,
                    ease: "power2.out",
                    stagger: 0.1
                }
            );

            // Bubbles Animation
            gsap.to(".hero-bubble", {
                y: "random(-100, 100)",
                x: "random(-50, 50)",
                scale: "random(0.7, 1.3)",
                opacity: "random(0.1, 0.4)",
                duration: "random(5, 10)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    each: 0.2,
                    from: "random"
                },
                scrollTrigger: {
                    trigger: root.current,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play pause resume pause"
                }
            });

            // BG Blobs Drift
            gsap.to(".hero-blob", {
                x: "random(-50, 50)",
                y: "random(-50, 50)",
                scale: "random(0.8, 1.2)",
                duration: "random(10, 20)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                scrollTrigger: {
                    trigger: root.current,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play pause resume pause"
                }
            });

            // ✨ CLEANING ANIMATION ✨
            const cleaningTl = gsap.timeline({ delay: 0.8 });

            cleaningTl
                .fromTo(".cleaning-hand",
                    { x: 300, y: 100, rotate: 30, opacity: 0 },
                    { x: 20, y: -5, rotate: 0, opacity: 1, duration: 0.48, ease: "power3.out" }
                )
                .to(".cleaning-hand", {
                    x: -20, y: 5, rotate: -5, duration: 0.16, repeat: 3, yoyo: true, ease: "sine.inOut"
                })
                .to(".clean-dirt", {
                    opacity: 0, scale: 1.1, filter: "blur(20px)", duration: 0.32, ease: "power2.in"
                }, "-=0.48")
                .to(".cleaning-hand", {
                    x: -400, y: 200, rotate: -40, opacity: 0, duration: 0.56, ease: "power2.in"
                })
                .fromTo(".clean-sparkle",
                    { scale: 0, opacity: 0, rotate: -45 },
                    { scale: 1.5, opacity: 1, rotate: 45, duration: 0.4, ease: "back.out(3)" },
                    "-=0.32"
                )
                .to(".clean-sparkle", {
                    opacity: 0, scale: 0, duration: 0.32, delay: 0.16
                });

        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={root} className="relative min-h-[95vh] flex flex-col items-center justify-center pt-12 pb-12 px-6 overflow-hidden bg-white">

            {/* --- Premium Background Layer --- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Mesh Gradient / Blobs */}
                <div className="hero-blob absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-brand-green/5 rounded-full blur-[40px] md:blur-[80px] will-change-transform" />
                <div className="hero-blob absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-blue-900/[0.03] rounded-full blur-[40px] md:blur-[80px] will-change-transform" />
                <div className="hero-blob absolute top-[40%] right-[15%] w-[20vw] h-[20vw] bg-brand-green/[0.03] rounded-full blur-[30px] md:blur-[60px] will-change-transform" />

                {/* 🫧 Bubbles Particles 🫧 */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className={`hero-bubble absolute rounded-full bg-white/40 border border-brand-green/30 ${i > 4 ? 'hidden md:block' : ''} md:backdrop-blur-[6px] md:shadow-[0_8px_32px_0_rgba(162,192,55,0.1)] will-change-transform`}
                            style={{
                                width: Math.random() * 60 + 30 + 'px',
                                height: Math.random() * 60 + 30 + 'px',
                                left: Math.random() * 100 + '%',
                                top: Math.random() * 100 + '%',
                                opacity: 0.4
                            }}
                        />
                    ))}
                </div>
            </div>



            <div className="max-w-7xl mx-auto text-center relative z-10 w-full flex flex-col items-center">

                <div className="hero-fade-in mb-8">
                    <img src="/logo-center-back.png" alt="IC GROUP" className="h-28 md:h-36 w-auto object-contain" />
                </div>

                {/* Ultra-tight Minimalist Heading */}
                <h1 className="flex flex-col items-center mb-8 select-none font-extrabold tracking-tighter uppercase whitespace-nowrap leading-[0.8] relative z-10">
                    <span className="hero-title-reveal block text-[clamp(55px,15vw,120px)] text-brand-dark">
                        Создать
                    </span>
                    <span className="hero-title-reveal block text-[clamp(60px,16vw,140px)] text-brand-green relative inline-block px-4 py-2 overflow-visible group">

                        <span className="relative z-20">
                            Чистоту
                        </span>

                        {/* 🌫️ The New Organic Dirt Spot */}
                        <div className="clean-dirt absolute top-1/2 right-[-10%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-28 md:h-28 pointer-events-none z-10 opacity-40 flex items-center justify-center mix-blend-multiply">
                            <svg viewBox="0 0 200 200" className="w-full h-full text-[#5c6066] fill-current">
                                <path d="M41.7,-72.4C53.4,-64.7,62.1,-53.4,68.9,-41.4C75.7,-29.4,80.6,-16.7,81.1,-3.7C81.6,9.3,77.7,22.6,71.2,34.8C64.7,47,55.6,58.1,44.4,66.5C33.2,74.9,19.9,80.6,6.1,80.9C-7.7,81.2,-21.9,76.1,-34.5,68.9C-47.1,61.7,-58.1,52.4,-66.4,41.2C-74.7,30,-80.3,16.9,-81.1,3.4C-81.9,-10.1,-77.9,-24,-69.9,-35.8C-61.9,-47.6,-49.9,-57.3,-37.4,-64.5C-24.9,-71.7,-11.9,-76.4,2.1,-79.8C16.1,-83.2,30,-80.1,41.7,-72.4Z" transform="translate(100 100)" />
                            </svg>
                        </div>

                        {/* ✨ The Clean Sparkle */}
                        <div className="clean-sparkle absolute top-0 right-0 w-24 h-24 pointer-events-none z-[50] opacity-0 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white drop-shadow-[0_0_8px_rgba(162,192,55,0.4)]">
                                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor" />
                            </svg>
                        </div>

                        {/* ✋ The Cleaning Cloth */}
                        <img
                            src="/rag.png"
                            alt="Cleaning"
                            className="cleaning-hand absolute top-0 right-[-20%] w-40 md:w-64 h-auto pointer-events-none z-[60] opacity-0"
                        />
                    </span>
                    <span className="hero-title-reveal block text-[clamp(55px,15vw,120px)] text-brand-dark">
                        Во всем
                    </span>
                </h1>

                <div className="hero-fade-in max-w-2xl mb-8">
                    <p className="text-lg md:text-xl font-semibold text-brand-dark/50 tracking-tight leading-tight">
                        Лидер профессионального клининга в Казахстане. <br />
                    </p>
                </div>

                <div className="hero-fade-in flex flex-col items-center gap-6">
                    <button
                        onClick={onCalcOpen}
                        className="group relative px-12 py-6 overflow-hidden rounded-full transition-all duration-700 hover:scale-105 active:scale-95 shadow-xl shadow-brand-dark/10"
                    >
                        <div className="absolute inset-0 bg-brand-dark group-hover:bg-brand-green transition-colors duration-700" />
                        <span className="relative z-10 !text-white text-xs font-bold uppercase tracking-[0.3em]" style={{ color: '#FFFFFF' }}>Оставить заявку</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

