import {
    Building2,
    Waves,
    Flower2,
    Bug,
    Wrench,
    Snowflake,
    Coffee,
    Shirt
} from 'lucide-react';

const ServicesSection = () => {
    const mainServices = [
        { id: "01", title: "Базовая уборка", description: "Наводим порядок ежедневно", image: "/basic-cleaning.png" },
        { id: "02", title: "Поддерживающая уборка", description: "Поддерживаем чистоту в течение дня", image: "/maintenance-cleaning.png" },
        { id: "03", title: "Генеральная уборка", description: "Основательная, длительная уборка", image: "/deep-cleaning.png" },
        { id: "04", title: "Послестроительная уборка", description: "Приведение помещения в порядок после строительства или ремонта", image: "/post-construction.png" },
    ];

    const otherServices = [
        { id: "05", title: "Мойка витражей", icon: <Waves className="w-5 h-5" />, image: "/window-cleaning.png" },
        { id: "06", title: "Высотные работы", icon: <Building2 className="w-5 h-5" />, image: "/high-altitude.png" },
        { id: "07", title: "Флористы", icon: <Flower2 className="w-5 h-5" />, image: "/florist.png" },
        { id: "08", title: "Дезинсекция", icon: <Bug className="w-5 h-5" />, image: "/pest-control.png" },
        { id: "09", title: "Инженерия", icon: <Wrench className="w-5 h-5" />, image: "/service-chemistry.png" },
        { id: "10", title: "Уборка снега", icon: <Snowflake className="w-5 h-5" />, image: "/snow-removal.png" },
        { id: "11", title: "Кофеледи", icon: <Coffee className="w-5 h-5" />, image: "/coffee-lady.png" },
        { id: "12", title: "Химчистка", icon: <Shirt className="w-5 h-5" />, image: "/service-engineering.png" },
    ];

    return (
        <section className="py-10 bg-white overflow-hidden" id="services">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-10 text-center flex flex-col items-center on-reveal">
                    <h2 className="mb-2">
                        НАШИ УСЛУГИ
                    </h2>
                    <p className="text-[10px] md:text-xs font-medium text-brand-green uppercase tracking-[0.3em]">
                        Создаем чистоту по всему казахстану
                    </p>
                </div>

                {/* Main 4 Vertical Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {mainServices.map((service, i) => (
                        <div
                            key={service.id}
                            className={`group relative h-[300px] md:h-[400px] overflow-hidden rounded-[20px] cursor-pointer bg-white on-reveal stagger-${(i % 4) + 1} card-premium-hover`}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute bottom-4 left-3 right-3 md:bottom-6 md:left-5 md:right-5">
                                <div className="flex flex-col justify-end h-[180px]">
                                    <h3 className="text-sm md:text-xl font-medium text-white uppercase leading-[1.1] drop-shadow-lg mb-2 h-[2.4em] flex items-start">
                                        {service.title}
                                    </h3>

                                    <p className="text-[11px] md:text-sm text-white/90 font-medium leading-tight mb-4 md:mb-6 h-[4.5em] line-clamp-3 drop-shadow-sm">
                                        {service.description}
                                    </p>

                                    <div className="flex justify-end items-end">
                                        <span className="text-brand-green text-xl md:text-2xl font-bold opacity-40 group-hover:opacity-100 transition-opacity duration-500 leading-none">{service.id}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative border-t border-black/5 pt-10 on-reveal">
                <div className="mb-6 px-6 max-w-7xl mx-auto flex justify-between items-end">
                    <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-brand-dark/30">Дополнительный сервис</p>
                    <div className="hidden md:flex gap-2">
                        <div className="text-[9px] font-medium uppercase tracking-widest text-brand-dark/30">Листайте зажав мышкой &rarr;</div>
                    </div>
                </div>

                <div
                    className="relative w-full overflow-x-auto no-scrollbar touch-pan-x"
                >
                    <div className="flex gap-4 py-4 animate-marquee-css will-change-transform hover:pause-animation min-w-max">
                        {[1, 2, 3].map((set) => (
                            <div key={set} className="flex gap-4 min-w-max">
                                {otherServices.map((service) => (
                                    <div
                                        key={`${set}-${service.id}`}
                                        className="w-[240px] md:w-[280px] h-[320px] md:h-[360px] relative rounded-[20px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-[box-shadow,background-color] duration-500"
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                                        <div className="absolute top-6 left-5 right-5">
                                            <h4 className="text-lg md:text-xl font-medium text-white uppercase leading-tight drop-shadow-sm">
                                                {service.title}
                                            </h4>
                                        </div>

                                        <div className="absolute bottom-6 left-5 right-5 flex justify-end items-center">
                                            <span className="text-[10px] font-medium text-white/40">{service.id}</span>
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
