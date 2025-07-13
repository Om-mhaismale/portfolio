import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import CELLS from 'vanta/dist/vanta.cells.min';

const ParticlesBackground: React.FC = () => {
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffect = useRef<any>(null);

    useEffect(() => {
        if (!vantaEffect.current && vantaRef.current) {
            vantaEffect.current = CELLS({
                el: vantaRef.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.00,
                color1: 0x0,
                color2: 0x9710c2,
                size: 1.70,
                speed: 3.10,
                direction: 10,
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
