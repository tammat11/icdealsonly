const clients = [
    { name: "Technodom", domain: "technodom.kz", logo: "/technodom-logo.png" },
    { name: "Forte Bank", domain: "forte.kz", logo: "/forte-bank.png" },
    { name: "H&M", domain: "hm.com", logo: "/hm-logo.png" },
    { name: "JTI", domain: "jti.com", logo: "/jti-logo.png" },
    { name: "KOTON", domain: "koton.com", logo: "/koton-logo.png" },
    { name: "Magnum", domain: "magnum.kz" },
    { name: "Kaspi Bank", domain: "kaspi.kz" },
    { name: "Bank RBK", domain: "bankrbk.kz" },
    { name: "Home Credit", domain: "homecredit.kz" },
    { name: "Eurasian Bank", domain: "eubank.kz" },
    { name: "Defacto", domain: "defacto.com.tr" },
    { name: "LPP", domain: "lpp.com" },
    { name: "Air Astana", domain: "airastana.com" },
    { name: "Samsung", domain: "samsung.com" },
];

const ClientsMarquee = () => {
    return (
        <section className="py-20 bg-white border-y border-black/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 on-reveal">
                <div className="flex items-center gap-6">
                    <span className="text-[12px] font-black uppercase tracking-[0.3em] text-brand-dark/30 whitespace-nowrap">Наши ключевые партнеры</span>
                    <div className="h-px w-full bg-black/5" />
                </div>
            </div>

            <div className="relative">
                <div className="flex whitespace-nowrap gap-8 md:gap-24 items-center w-max animate-marquee-css will-change-transform">
                    {[1, 2, 3].map((set) => (
                        <div key={set} className="flex items-center gap-8 md:gap-24">
                            {clients.map((client, i) => (
                                <div
                                    key={`${set}-${i}`}
                                    className="flex flex-col items-center gap-4 group cursor-default"
                                >
                                    <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-white border border-black/5 flex items-center justify-center p-6 card-premium-hover relative overflow-hidden">
                                        <img
                                            src={client.logo || `https://logo.clearbit.com/${client.domain}`}
                                            alt={client.name}
                                            className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                if (!target.src.includes('google.com')) {
                                                    target.src = `https://www.google.com/s2/favicons?sz=128&domain=${client.domain}`;
                                                } else {
                                                    target.style.display = 'none';
                                                    const parent = target.parentElement;
                                                    if (parent) {
                                                        const initials = client.name.split(' ').map(n => n[0]).join('').slice(0, 2);
                                                        parent.innerHTML = `<span class="text-xl font-black text-brand-dark/20">${initials}</span>`;
                                                    }
                                                }
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/20 group-hover:text-brand-green transition-colors duration-500">
                                        {client.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
                <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />
            </div>
        </section>
    );
};

export default ClientsMarquee;
