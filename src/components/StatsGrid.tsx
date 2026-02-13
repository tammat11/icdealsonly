import { Users, Calendar, Maximize, PieChart, Truck, Briefcase } from 'lucide-react';

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
                            className="group relative h-[130px] md:h-[160px] on-reveal"
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className="h-full rounded-[24px] p-4 md:p-6 flex flex-col items-center justify-center text-center overflow-hidden relative shadow-md hover:shadow-2xl bg-white border border-brand-dark/5 hover:-translate-y-2 transition-[box-shadow,transform,background-color] duration-500">

                                {/* Background Accent */}
                                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-brand-green/5 rounded-full blur-3xl group-hover:bg-brand-green/10 transition-all duration-700" />

                                {/* Main Content centered */}
                                <div className="relative z-10 flex flex-col items-center space-y-1">
                                    <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all duration-500">
                                        {stat.icon}
                                    </div>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="font-bold tracking-tighter leading-none text-3xl md:text-4xl text-brand-green tabular-nums">{stat.value}</span>
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
