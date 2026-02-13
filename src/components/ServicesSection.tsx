import { useRef, useEffect } from 'react';
import {
    Building2,
    Waves,
    Sparkles,
    Hammer,
    Droplets,
    Wind,
    Flower2,
    Bug,
    Wrench,
    Snowflake,
    Coffee,
    Shirt
} from 'lucide-react';

const ServicesSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const mainServices = [
        { id: "01", title: "Базовая уборка", icon: <Droplets className="w-6 h-6" />, image: "/basic-cleaning.png" },
        { id: "02", title: "Поддерживающая уборка", icon: <Wind className="w-6 h-6" />, image: "/maintenance-cleaning.png" },
        { id: "03", title: "Генеральная уборка", icon: <Sparkles className="w-6 h-6" />, image: "/deep-cleaning.png" },
        { id: "04", title: "Послестроительная уборка", icon: <Hammer className="w-6 h-6" />, image: "/post-construction.png" },
    ];

    const otherServices = [
        { id: "05", title: "Мойка витражей", icon: <Waves className="w-5 h-5" />, image: "/window-cleaning.png" },
        { id: "06", title: "Высотные работы", icon: <Building2 className="w-5 h-5" />, image: "/high-altitude.png" },
        { id: "07", title: "Флористы", icon: <Flower2 className="w-5 h-5" />, image: "/florist.png" },
        { id: "08", title: "Дезинсекция", icon: <Bug className="w-5 h-5" />, image: "/pest-control.png" },
        { id: "09", title: "Инженерия", icon: <Wrench className="w-5 h-5" />, image: "/engineering.png" },
        { id: "10", title: "Уборка снега", icon: <Snowflake className="w-5 h-5" />, image: "/snow-removal.png" },
        { id: "11", title: "Кофеледи", icon: <Coffee className="w-5 h-5" />, image: "/coffee-lady.png" },
        { id: "12", title: "Химчистка", icon: <Shirt className="w-5 h-5" />, image: "/dry-cleaning.png" },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".service-reveal", {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);
    return (
        <section ref={sectionRef} className="py-10 bg-white overflow-hidden" id="services">
            <style>{`
                .service-reveal {
                    transform: translateY(40px);
                }
                @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                .animate-marquee-slow {
                    animation: marquee-scroll 40s linear infinite;
                }
                .animate-marquee-slow:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-10 text-center flex flex-col items-center opacity-0 service-reveal">
                    <h2 className="mb-2">
                        НАШИ УСЛУГИ
                    </h2>
                    <p className="text-[10px] md:text-xs font-bold text-brand-green uppercase tracking-[0.3em]">
                        Создаем чистоту по всему казахстану
                    </p>
                </div>

                {/* Main 4 Vertical Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {mainServices.map((service) => (
                        <div
                            key={service.id}
                            className="group relative h-[300px] md:h-[400px] overflow-hidden rounded-[20px] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-700 hover:-translate-y-1 opacity-0 service-reveal scale-95"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute bottom-4 left-3 right-3 md:bottom-6 md:left-5 md:right-5">
                                <h3 className="text-sm md:text-xl font-bold text-white uppercase leading-[1.1] drop-shadow-lg mb-3 md:mb-5">
                                    {service.title}
                                </h3>

                                <div className="flex justify-between items-end">
                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center">
                                        <div className="scale-75 md:scale-100">{service.icon}</div>
                                    </div>
                                    <span className="text-brand-green text-xl md:text-2xl font-black opacity-40 group-hover:opacity-100 transition-opacity duration-500 leading-none">{service.id}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative border-t border-black/5 pt-10 opacity-0 service-reveal" style={{ transitionDelay: '500ms' }}>
                <div className="mb-6 px-6 max-w-7xl mx-auto flex justify-between items-end">
                    <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-dark/30">Дополнительный сервис</p>
                    <div className="hidden md:flex gap-2">
                        <div className="text-[9px] font-bold uppercase tracking-widest text-brand-dark/30">Листайте зажав мышкой &rarr;</div>
                    </div>
                </div>

                <div
                    className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
                    onMouseDown={(e) => {
                        const target = e.currentTarget;
                        const marquee = target.querySelector('.marquee-wrapper') as HTMLElement;
                        if (!marquee) return;

                        target.style.animationPlayState = 'paused';
                        let startX = e.pageX;
                        let initialTransform = new WebKitCSSMatrix(window.getComputedStyle(marquee).transform).m41;

                        const onMouseMove = (moveE: MouseEvent) => {
                            const deltaX = moveE.pageX - startX;
                            marquee.style.transform = `translateX(${initialTransform + deltaX}px)`;
                            marquee.style.animation = 'none';
                        };

                        const onMouseUp = () => {
                            window.removeEventListener('mousemove', onMouseMove);
                            window.removeEventListener('mouseup', onMouseUp);
                            marquee.style.animation = '';
                            target.style.animationPlayState = '';
                        };

                        window.addEventListener('mousemove', onMouseMove);
                        window.addEventListener('mouseup', onMouseUp);
                    }}
                >
                    <div className="marquee-wrapper flex gap-4 animate-marquee-slow py-4">
                        {/* Render three times for seamless infinite scroll */}
                        {[1, 2, 3].map((set) => (
                            <div key={set} className="flex gap-4 min-w-max">
                                {otherServices.map((service) => (
                                    <div
                                        key={`${set}-${service.id}`}
                                        className="w-[240px] md:w-[280px] h-[320px] md:h-[360px] relative rounded-[20px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                                        <div className="absolute top-6 left-5 right-5">
                                            <h4 className="text-lg md:text-xl font-bold text-white uppercase leading-tight drop-shadow-sm">
                                                {service.title}
                                            </h4>
                                        </div>

                                        <div className="absolute bottom-6 left-5 right-5 flex justify-between items-center">
                                            <div className="text-brand-green">
                                                {service.icon}
                                            </div>
                                            <span className="text-[10px] font-bold text-white/40">{service.id}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
