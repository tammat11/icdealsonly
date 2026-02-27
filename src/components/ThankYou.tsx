import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
        fbq: (...args: any[]) => void;
    }
}

const ThankYou = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Google Tag Manager
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'page_view',
                pageUrl: 'https://deals.ic-group.kz/thank-you'
            });

            // Google Analytics (gtag.js)
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'page_view', {
                    page_path: 'https://deals.ic-group.kz/thank-you',
                    page_title: 'Спасибо за заявку - IC Group'
                });
                window.gtag('event', 'generate_lead', {
                    currency: 'KZT',
                    value: 1
                });
            }

            // Facebook Pixel
            if (typeof window.fbq === 'function') {
                window.fbq('track', 'PageView');
                window.fbq('track', 'Lead');
            }
        }
    }, []);

    return (
        <div className="min-h-screen bg-brand-light flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background elements similar to Hero */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-brand-green/5 rounded-full blur-[40px] md:blur-[80px] animate-float-slow" />
                <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-blue-900/[0.03] rounded-full blur-[40px] md:blur-[80px] animate-float-medium" />
            </div>

            <div className="max-w-md w-full bg-white rounded-[30px] p-10 md:p-14 text-center shadow-xl border border-black/5 relative z-10 animate-fade-in">
                <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-green animate-scale-in">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h1 className="text-3xl font-black uppercase text-brand-dark mb-4 tracking-tight">СПАСИБО!</h1>
                <p className="text-brand-dark/60 mb-10 text-lg leading-relaxed">
                    Ваша заявка успешно принята. <br />
                    Наш менеджер свяжется с вами в ближайшее время.
                </p>

                <button
                    onClick={() => navigate('/')}
                    className="w-full py-4 bg-brand-dark text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-brand-green transition-colors duration-300 shadow-lg"
                >
                    Вернуться на главную
                </button>
            </div>
        </div>
    );
};

export default ThankYou;
