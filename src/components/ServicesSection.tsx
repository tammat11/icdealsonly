import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const mainServices = [
        {
            id: "01",
            title: "Базовая уборка",
            image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800",
            icon: <Droplets className="w-6 h-6" />
        },
        {
            id: "02",
            title: "Поддерживающая уборка",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
            icon: <Wind className="w-6 h-6" />
        },
        {
            id: "03",
            title: "Генеральная уборка",
            image: "https://images.unsplash.com/photo-1581578731548-c64695ce6952?auto=format&fit=crop&q=80&w=800",
            icon: <Sparkles className="w-6 h-6" />
        },
        {
            id: "04",
            title: "Послестроительная уборка",
            image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=800",
            icon: <Hammer className="w-6 h-6" />
        }
    ];

    const otherServices = [
        { id: "05", title: "Мойка витражей и светильников", icon: <Waves className="w-5 h-5" /> },
        { id: "06", title: "Высотные работы", icon: <Building2 className="w-5 h-5" /> },
        { id: "07", title: "Флористы и садовники", icon: <Flower2 className="w-5 h-5" /> },
        { id: "08", title: "Обработка от насекомых и грызунов", icon: <Bug className="w-5 h-5" /> },
        { id: "09", title: "Инженерные услуги", icon: <Wrench className="w-5 h-5" /> },
        { id: "10", title: "Уборка снега", icon: <Snowflake className="w-5 h-5" /> },
        { id: "11", title: "Кофеледи", icon: <Coffee className="w-5 h-5" /> },
        { id: "12", title: "Химчистка", icon: <Shirt className="w-5 h-5" /> },
    ];

    // Duplicate for infinite marquee
    const infiniteOthers = [...otherServices, ...otherServices, ...otherServices, ...otherServices];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".main-service-card", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".main-services-grid",
                    start: "top 85%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-white overflow-hidden" id="services">
            <style>{`
                @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-slow {
                    animation: marquee-scroll 40s linear infinite;
                }
                .animate-marquee-slow:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <div className="section-tag mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                        <span>Наш сервис</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tighter uppercase whitespace-nowrap leading-[0.8]">
                        Создаем чистоту <br />
                        <span className="text-brand-green">по всему казахстану</span>
                    </h2>
                </div>

                {/* Main 4 Grid */}
                <div className="main-services-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {mainServices.map((service) => (
                        <div
                            key={service.id}
                            className="main-service-card group relative h-[300px] md:h-[400px] overflow-hidden rounded-[32px] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                            <div className="absolute top-8 left-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase leading-tight max-w-[200px] drop-shadow-md">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="absolute bottom-8 right-8 flex items-center justify-center">
                                <span className="text-brand-green text-3xl font-black opacity-30 group-hover:opacity-100 transition-opacity duration-500">{service.id}</span>
                            </div>

                            {/* Hover Overlay Icon */}
                            <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center translate-y-[-20%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                {service.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Marquee for others */}
            <div className="relative border-t border-black/5 pt-20">
                <div className="mb-10 px-6 max-w-7xl mx-auto">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark/30">Специализированные услуги</p>
                </div>

                <div className="overflow-hidden flex">
                    <div className="flex gap-4 animate-marquee-slow py-4">
                        {infiniteOthers.map((service, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-[280px] md:w-[320px] bg-white border border-black/5 rounded-2xl p-6 flex items-center justify-between hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-brand-green/5 text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                                        {service.icon}
                                    </div>
                                    <span className="text-sm font-bold text-brand-dark leading-tight uppercase max-w-[160px]">
                                        {service.title}
                                    </span>
                                </div>
                                <span className="text-[10px] font-bold text-brand-dark/20">{service.id}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
};

export default ServicesSection;
