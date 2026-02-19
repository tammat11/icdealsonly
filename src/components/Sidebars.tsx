import { Instagram, MessageCircle } from 'lucide-react';

const Sidebars = () => {
    return (
        <div className="fixed left-6 bottom-0 z-[100] hidden xl:flex flex-col items-center gap-6 pb-0">
            <div className="flex flex-col gap-5 on-reveal" style={{ transitionDelay: '1.5s' }}>
                <a href="https://instagram.com/icgroup.kz" target="_blank" rel="noopener noreferrer" className="text-brand-dark/30 hover:text-brand-green transition-colors duration-300">
                    <Instagram size={18} />
                </a>
                <a href="https://whatsapp.com/channel/0029Vb7aAJm9cDDVFjbL8c10" target="_blank" rel="noopener noreferrer" className="text-brand-dark/30 hover:text-brand-green transition-colors duration-300">
                    <MessageCircle size={18} />
                </a>
            </div>
            <div
                className="w-[1px] bg-brand-dark/10 h-0 transition-[height] duration-1000 ease-in-out on-reveal"
                style={{ height: '100px', transitionDelay: '1s' }}
            />
        </div>
    );
};

export default Sidebars;
