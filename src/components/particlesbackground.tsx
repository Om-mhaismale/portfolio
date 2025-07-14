import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';

const ParticlesBackground: React.FC = () => {
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffect = useRef<any>(null);

    useEffect(() => {
        if (!vantaEffect.current && vantaRef.current) {
            vantaEffect.current = BIRDS({
                el: vantaRef.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                birdSize: 2.20,
                quantity: 4.00,
                separation: 100.00,
            });

        }

        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, []);

    return (
        <div
            ref={vantaRef}
            className="fixed top-0 left-0 w-full h-full z-[-1]"
            style={{ minHeight: '100vh', minWidth: '100vw' }}
        />
    );
};

export default ParticlesBackground;