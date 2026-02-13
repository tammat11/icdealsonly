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
        { id: "05", title: "Мойка витражей", icon: <Waves className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=400" },
        { id: "06", title: "Высотные работы", icon: <Building2 className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400" },
        { id: "07", title: "Флористы", icon: <Flower2 className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1558036117-15d82a90bd36?auto=format&fit=crop&q=80&w=400" },
        { id: "08", title: "Дезинсекция", icon: <Bug className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1584622741082-ef8ec202404e?auto=format&fit=crop&q=80&w=400" },
        { id: "09", title: "Инженерия", icon: <Wrench className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400" },
        { id: "10", title: "Уборка снега", icon: <Snowflake className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1517210122415-b0c70b2a09bf?auto=format&fit=crop&q=80&w=400" },
        { id: "11", title: "Кофеледи", icon: <Coffee className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400" },
        { id: "12", title: "Химчистка", icon: <Shirt className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1517677208171-4bc6725a3e60?auto=format&fit=crop&q=80&w=400" },
    ];

    const infiniteOthers = [...otherServices, ...otherServices, ...otherServices];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".main-service-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".main-services-grid",
                    start: "top 80%",
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
                    animation: marquee-scroll 50s linear infinite;
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

                {/* Main 4 Vertical Cards */}
                <div className="main-services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    {mainServices.map((service) => (
                        <div
                            key={service.id}
                            className="main-service-card group relative h-[500px] md:h-[600px] overflow-hidden rounded-[24px] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute top-8 left-6 right-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase leading-[0.9] drop-shadow-lg">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="absolute bottom-8 left-6 right-6 flex justify-between items-end">
                                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <span className="text-brand-green text-3xl font-black opacity-40 group-hover:opacity-100 transition-opacity duration-500 leading-none">{service.id}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Marquee for secondary cards */}
            <div className="relative border-t border-black/5 pt-16">
                <div className="mb-8 px-6 max-w-7xl mx-auto">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark/30">Дополнительные услуги</p>
                </div>

                <div className="overflow-hidden flex">
                    <div className="flex gap-4 animate-marquee-slow py-4">
                        {infiniteOthers.map((service, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-[220px] md:w-[260px] h-[300px] md:h-[350px] relative rounded-[20px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                <div className="absolute top-6 left-5 right-5">
                                    <h4 className="text-sm md:text-base font-bold text-white uppercase leading-tight drop-shadow-sm">
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
                </div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
};

export default ServicesSection;
