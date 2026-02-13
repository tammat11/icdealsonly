import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ApplicationForm = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".form-reveal", {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="contact-form" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-brand-dark text-white p-8 md:p-16 rounded-[40px] relative overflow-hidden shadow-2xl form-reveal">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-[120px]" />
                    
                    <div className="relative z-10">
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">Оставить заявку</h2>
                            <p className="text-white/60 text-lg">Заполните форму, и мы свяжемся с вами в ближайшее время для обсуждения вашего проекта.</p>
                        </div>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-4">Ваше имя</label>
                                <input 
                                    type="text" 
                                    placeholder="Иван Иванов" 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 placeholder:text-white/20 focus:outline-none focus:border-brand-green transition-all focus:bg-white/10" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-4">Телефон</label>
                                <input 
                                    type="tel" 
                                    placeholder="+7 (___) ___-__-__" 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 placeholder:text-white/20 focus:outline-none focus:border-brand-green transition-all focus:bg-white/10" 
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-4">Email</label>
                                <input 
                                    type="email" 
                                    placeholder="example@mail.com" 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 placeholder:text-white/20 focus:outline-none focus:border-brand-green transition-all focus:bg-white/10" 
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-4">О проекте</label>
                                <textarea 
                                    placeholder="Расскажите о ваших задачах..." 
                                    rows={4} 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 placeholder:text-white/20 focus:outline-none focus:border-brand-green transition-all focus:bg-white/10 resize-none" 
                                />
                            </div>
                            <div className="md:col-span-2 mt-4">
                                <button className="group relative w-full overflow-hidden rounded-2xl bg-brand-green py-5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative z-10 text-white font-bold uppercase tracking-[0.2em]">Отправить запрос</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplicationForm;
