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

    const services = [
        { id: "01", title: "Базовая уборка", icon: <Droplets className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=600" },
        { id: "02", title: "Поддерживающая уборка", icon: <Wind className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600" },
        { id: "03", title: "Генеральная уборка", icon: <Sparkles className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1581578731548-c64695ce6952?auto=format&fit=crop&q=80&w=600" },
        { id: "04", title: "Послестроительная уборка", icon: <Hammer className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=600" },
        { id: "05", title: "Мойка витражей", icon: <Waves className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=400" },
        { id: "06", title: "Высотные работы", icon: <Building2 className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400" },
        { id: "07", title: "Флористы", icon: <Flower2 className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1558036117-15d82a90bd36?auto=format&fit=crop&q=80&w=400" },
        { id: "08", title: "Дезинсекция", icon: <Bug className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1584622741082-ef8ec202404e?auto=format&fit=crop&q=80&w=400" },
        { id: "09", title: "Инженерия", icon: <Wrench className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400" },
        { id: "10", title: "Уборка снега", icon: <Snowflake className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1517210122415-b0c70b2a09bf?auto=format&fit=crop&q=80&w=400" },
        { id: "11", title: "Кофеледи", icon: <Coffee className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400" },
        { id: "12", title: "Химчистка", icon: <Shirt className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1517677208171-4bc6725a3e60?auto=format&fit=crop&q=80&w=400" },
    ];

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
        <section ref={sectionRef} className="py-24 bg-white overflow-hidden" id="services">
            <style>{`
                .service-fade-in {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }
                .service-fade-in.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                @keyframes marquee-horizontal {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-service {
                    animation: marquee-horizontal 60s linear infinite;
                }
                .animate-marquee-service:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-6">
                <div className={`mb-16 service-fade-in ${isVisible ? 'visible' : ''}`}>
                    <div className="section-tag mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                        <span>Наш сервис</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tighter uppercase whitespace-nowrap leading-[0.8] mb-2">
                        СОЗДАЕМ ЧИСТОТУ <br />
                        <span className="text-brand-green">ПО ВСЕМУ КАЗАХСТАНУ</span>
                    </h2>
                </div>

                {/* Main Grid for all services to ensure they appear */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`service-card group relative h-[300px] overflow-hidden rounded-[24px] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-700 hover:-translate-y-1 service-fade-in ${isVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                            <div className="absolute top-6 left-5 right-5">
                                <h3 className="text-lg font-bold text-white uppercase leading-tight drop-shadow-md">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="absolute bottom-6 left-5 right-5 flex justify-between items-center">
                                <div className="text-brand-green">
                                    {service.icon}
                                </div>
                                <span className="text-brand-green text-xl font-black opacity-30 group-hover:opacity-100 transition-opacity duration-500 leading-none">
                                    {service.id}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom sliding line for additional dynamics if all should scroll too */}
            <div className="relative border-t border-black/5 pt-12">
                <div className="overflow-hidden flex">
                    <div className="flex gap-4 animate-marquee-service py-4">
                        {[...services, ...services].map((service, i) => (
                            <div
                                key={`${service.id}-${i}`}
                                className="flex-shrink-0 px-8 py-3 bg-brand-light/50 border border-black/5 rounded-full flex items-center gap-3"
                            >
                                <span className="text-brand-green font-bold text-xs">{service.id}</span>
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-dark/60">{service.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
