import { Users, Calendar, Maximize, PieChart, Truck, Briefcase } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const CountUp = ({ end, duration = 2000 }: { end: string, duration?: number }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);
    const numericEnd = parseFloat(end.replace(/,/g, '.'));
    const isFloat = end.includes('.') || end.includes(',');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let startTime: number | null = null;
                    const step = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = Math.min((timestamp - startTime) / duration, 1);

                        // Easing function for smooth stop
                        const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

                        const current = numericEnd * easeOutQuart(progress);
                        setCount(current);

                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        }
                    };
                    window.requestAnimationFrame(step);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [numericEnd, duration]);

    return (
        <span ref={elementRef}>
            {isFloat ? count.toFixed(1) : Math.floor(count)}
        </span>
    );
};

const StatsGrid = () => {
    const stats = [
        { value: "5000", suffix: "+", label: "СОТРУДНИКОВ В\nХОЛДИНГЕ", icon: <Users className="w-6 h-6" /> },
        { value: "19", suffix: "", label: "ЛЕТ НА РЫНКЕ\nКАЗАХСТАНА", icon: <Calendar className="w-6 h-6" /> },
        { value: "4.5", suffix: "M+", label: "M² В ЕЖЕДНЕВНОМ\nУПРАВЛЕНИИ", icon: <Maximize className="w-6 h-6" /> },
        { value: "27", suffix: "%", label: "ДОЛЯ РЫНКА В\nСЕГМЕНТЕ B2B", icon: <PieChart className="w-6 h-6" /> },
        { value: "500", suffix: "+", label: "ЕДИНИЦ\nСПЕЦТЕХНИКИ", icon: <Truck className="w-6 h-6" /> },
        { value: "500", suffix: "+", label: "КОРПОРАТИВНЫХ\nКЛИЕНТОВ", icon: <Briefcase className="w-6 h-6" /> },
    ];

    return (
        <section className="section-padding-compact bg-white relative overflow-hidden" id="stats">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="mb-4 md:mb-6 text-center on-reveal">
                    <div className="section-tag">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                        <span>Наш масштаб</span>
                    </div>
                    <h2 className="text-brand-dark">
                        ЦИФРЫ <span className="text-brand-green">IC GROUP</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className={`group relative h-[130px] md:h-[160px] on-reveal stagger-${(i % 6) + 1}`}
                        >
                            <div className="h-full rounded-[24px] p-4 md:p-6 flex flex-col items-center justify-center text-center overflow-hidden relative bg-white border border-brand-dark/5 card-premium-hover">

                                {/* Background Accent */}
                                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-brand-green/5 rounded-full blur-3xl group-hover:bg-brand-green/10 transition-all duration-700" />

                                {/* Main Content centered */}
                                <div className="relative z-10 flex flex-col items-center space-y-1">
                                    <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all duration-500">
                                        {stat.icon}
                                    </div>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="font-bold tracking-tighter leading-none text-3xl md:text-4xl text-brand-green tabular-nums">
                                            <CountUp end={stat.value} />
                                        </span>
                                        <span className="font-bold leading-none text-xl md:text-2xl text-brand-green">{stat.suffix}</span>
                                    </div>
                                    <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-brand-dark/70 leading-relaxed whitespace-pre-line">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsGrid;
