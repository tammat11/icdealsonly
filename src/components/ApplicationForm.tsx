import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        comment: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        const webhookUrl = import.meta.env.VITE_BITRIX_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error("Webhook URL not found in environment variables");
            setStatus('error');
            return;
        }

        const payload = {
            fields: {
                TITLE: `Заявка с сайта от ${formData.name}`,
                CATEGORY_ID: 0,
                STAGE_ID: "NEW",
                UF_CRM_1728031304072: formData.phone,
                UF_CRM_1728030866213: formData.name,
                COMMENTS: formData.comment,
                SOURCE_ID: "WEB"
            }
        };

        try {
            const response = await fetch(`${webhookUrl}crm.deal.add.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', comment: '' });
                navigate('/thank-you');
            } else {
                console.error("Bitrix error", await response.text());
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission error", error);
            setStatus('error');
        }
    };

    const formatPhoneNumber = (value: string) => {
        const numbers = value.replace(/\D/g, '');
        if (numbers.length === 0) return '';
        let formatted = '+7';
        const digits = (numbers.startsWith('7') || numbers.startsWith('8'))
            ? numbers.slice(1)
            : numbers;
        const trimmed = digits.slice(0, 10);
        if (trimmed.length > 0) formatted += ` (${trimmed.slice(0, 3)}`;
        if (trimmed.length >= 4) formatted += `) ${trimmed.slice(3, 6)}`;
        if (trimmed.length >= 7) formatted += `-${trimmed.slice(6, 8)}`;
        if (trimmed.length >= 9) formatted += `-${trimmed.slice(8, 10)}`;
        return formatted;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            setFormData(prev => ({
                ...prev,
                phone: formatPhoneNumber(value)
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    return (
        <section ref={sectionRef} id="contact-form" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center flex flex-col items-center on-reveal">
                <h2 className="mb-2">
                    ОСТАВИТЬ ЗАЯВКУ
                </h2>
                <p className="text-[10px] md:text-xs font-bold text-brand-green uppercase tracking-[0.3em]">
                    Оперативно ответим на все ваши вопросы
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-gradient-to-br from-[#1a1c23] to-[#0f1115] text-white p-8 md:p-16 rounded-[40px] relative overflow-hidden shadow-2xl on-reveal border border-white/5">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[80px] pointer-events-none opacity-50" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[80px] pointer-events-none opacity-50" />

                    <div className="relative z-10 text-center md:text-left">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter leading-none text-white drop-shadow-md">
                                Начать сотрудничество
                            </h2>
                            <p className="text-white/60 text-base md:text-lg max-w-xl font-light leading-relaxed">
                                Оставьте заявку, и мы свяжемся с вами для обсуждения деталей вашего проекта.
                            </p>
                        </div>

                        {status === 'success' ? (
                            <div className="bg-brand-green/10 border border-brand-green/30 rounded-3xl p-10 text-center animate-fade-in backdrop-blur-sm">
                                <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-green">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
                                <p className="text-white/60 mb-8">Мы свяжемся с вами в ближайшее время.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold transition-all uppercase tracking-wider hover:scale-105"
                                >
                                    Отправить еще одну
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2 group on-reveal stagger-1">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4 group-focus-within:text-brand-green transition-colors">Ваше имя</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Иван Иванов"
                                        required
                                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-5 placeholder:text-white/20 focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.08] transition-all hover:bg-white/[0.05] text-white"
                                    />
                                </div>
                                <div className="space-y-2 group on-reveal stagger-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4 group-focus-within:text-brand-green transition-colors">Телефон</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        placeholder="+7 (___) ___-__-__"
                                        required
                                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-5 placeholder:text-white/20 focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.08] transition-all hover:bg-white/[0.05] text-white"
                                    />
                                </div>

                                <div className="space-y-2 md:col-span-2 group on-reveal stagger-3">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4 group-focus-within:text-brand-green transition-colors">Комментарий</label>
                                    <textarea
                                        name="comment"
                                        value={formData.comment}
                                        onChange={handleChange}
                                        placeholder="Расскажите о ваших задачах..."
                                        rows={4}
                                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-5 placeholder:text-white/20 focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.08] transition-all hover:bg-white/[0.05] resize-none text-white"
                                    />
                                </div>

                                <div className="md:col-span-2 mt-6 on-reveal stagger-4">
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-brand-green to-[#8ab32b] py-6 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(162,192,55,0.5)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                                        <span className="relative z-10 text-white font-bold uppercase tracking-[0.2em] text-lg shadow-black/20 drop-shadow-sm">
                                            {status === 'submitting' ? 'Отправка...' : 'Отправить заявку'}
                                        </span>
                                    </button>
                                    {status === 'error' && (
                                        <p className="text-red-400 text-sm mt-4 text-center bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                                            Произошла ошибка. Пожалуйста, проверьте данные и попробуйте еще раз.
                                        </p>
                                    )}
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplicationForm;
