import React, { useEffect, useRef } from 'react';

declare global {
    interface Window {
        particlesJS: any;
    }
}

const ParticlesBackground: React.FC = () => {
    const particlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadParticlesScript = () =>
            new Promise<void>((resolve) => {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/particles.js';
                script.async = true;
                script.onload = () => resolve();
                document.head.appendChild(script);
            });

        const initParticles = async () => {
            await loadParticlesScript();

            if (window.particlesJS && particlesRef.current) {
                window.particlesJS('particles-js', {
                    particles: {
                        number: { value: 180 },
                        size: { value: 5, random: true }, // random star sizes
                        color: { value: '#fff' },
                        opacity: { value: 0.1 },
                        move: { speed: 0.5 },
                        line_linked: {
                            enable: true, // no lines for a starfield look
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: { enable: false, mode: 'repulse' },
                            onclick: { enable: true, mode: 'push' },
                        },
                        modes: {
                            repulse: { distance: 50 },
                            push: { particles_nb: 1 },
                        },
                    },
                });
            }
        };

        initParticles();

        return () => {
            // particles.js doesn't have a built-in destroy method
        };
    }, []);

    return (
        <>
            {/* Space-like gradient background */}
            <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black via-slate-900 to-black z-[-1]" />
            {/* Particles */}
            <div
                className="fixed top-0 left-0 w-full h-full z-0"
                ref={particlesRef}
                id="particles-js"
            />
        </>
    );
};

export default ParticlesBackground;
