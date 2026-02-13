import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Instagram, Send, MessageCircle } from 'lucide-react';

const Sidebars = () => {
    const leftRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial state: lines are height 0, items are invisible
            gsap.set(".sidebar-line", { height: 0 });
            gsap.set(".sidebar-item", { opacity: 0, y: 10 });

            const tl = gsap.timeline({ delay: 1.5 });

            tl.to(".sidebar-line", {
                height: "100px",
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2
            })
                .to(".sidebar-item", {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out"
                });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={leftRef} className="fixed left-6 bottom-0 z-[100] hidden xl:flex flex-col items-center gap-6 pb-0">
            <div className="flex flex-col gap-5 sidebar-item">
                <a href="https://instagram.com/icgroup.kz" target="_blank" rel="noopener noreferrer" className="text-brand-dark/30 hover:text-brand-green transition-colors duration-300">
                    <Instagram size={18} />
                </a>
                <a href="https://t.me/icgroup" target="_blank" rel="noopener noreferrer" className="text-brand-dark/30 hover:text-brand-green transition-colors duration-300">
                    <Send size={18} />
                </a>
                <a href="https://wa.me/77010000000" target="_blank" rel="noopener noreferrer" className="text-brand-dark/30 hover:text-brand-green transition-colors duration-300">
                    <MessageCircle size={18} />
                </a>
            </div>
            <div className="w-[1px] bg-brand-dark/10 sidebar-line" />
        </div>
    );
};

export default Sidebars;
