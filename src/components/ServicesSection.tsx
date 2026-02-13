import { useRef, useEffect, useState } from 'react';
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
    const [isVisible, setIsVisible] = useState(false);

    const mainServices = [
        { id: "01", title: "Базовая уборка", icon: <Droplets className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800" },
        { id: "02", title: "Поддерживающая уборка", icon: <Wind className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
        { id: "03", title: "Генеральная уборка", icon: <Sparkles className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1581578731548-c64695ce6952?auto=format&fit=crop&q=80&w=800" },
        { id: "04", title: "Послестроительная уборка", icon: <Hammer className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=800" },
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
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-10 bg-white overflow-hidden" id="services">
            <style>{`
                .service-fade-in {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }
                .service-fade-in.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
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
                <div className={`mb-10 text-center flex flex-col items-center service-fade-in ${isVisible ? 'visible' : ''}`}>
                    <h2 className="mb-2">
                        НАШИ УСЛУГИ
                    </h2>
                    <p className="text-[10px] md:text-xs font-bold text-brand-green uppercase tracking-[0.3em]">
                        Создаем чистоту по всему казахстану
                    </p>
                </div>

                {/* Main 4 Vertical Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {mainServices.map((service, index) => (
                        <div
                            key={service.id}
                            className={`group relative h-[300px] md:h-[400px] overflow-hidden rounded-[20px] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-700 hover:-translate-y-1 service-fade-in ${isVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute top-4 left-3 right-3 md:top-6 md:left-5 md:right-5">
                                <h3 className="text-sm md:text-xl font-bold text-white uppercase leading-[0.9] drop-shadow-lg">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="absolute bottom-4 left-3 right-3 md:bottom-6 md:left-5 md:right-5 flex justify-between items-end">
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center">
                                    <div className="scale-75 md:scale-100">{service.icon}</div>
                                </div>
                                <span className="text-brand-green text-xl md:text-2xl font-black opacity-40 group-hover:opacity-100 transition-opacity duration-500 leading-none">{service.id}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Marquee for secondary cards */}
            <div className={`relative border-t border-black/5 pt-10 service-fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
                <div className="mb-6 px-6 max-w-7xl mx-auto">
                    <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-dark/30">Дополнительный сервис</p>
                </div>

                <div className="overflow-hidden flex">
                    <div className="flex gap-3 animate-marquee-slow py-2">
                        {infiniteOthers.map((service, i) => (
                            <div
                                key={`${service.id}-${i}`}
                                className="flex-shrink-0 w-[180px] md:w-[220px] h-[240px] md:h-[280px] relative rounded-[16px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-500"
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
