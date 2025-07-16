import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";
import bgImg from "../assets/bg3.webp"; // adjust path if needed

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
                color1: 0x0,
                color2: 0x0,
                colorMode: "lerpGradient",
                birdSize: 1.60,
                wingSpan: 40.00,
                speedLimit: 2.00,
                separation: 200.00,
                alignment: 1.00,
                cohesion: 1.00,
                quantity: 4.00,
                backgroundAlpha: 0.0, // <--- IMPORTANT: Makes Vanta transparent
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
        <>
            {/* Background image layer */}
            <div
                className="fixed top-0 left-0 w-full h-full z-[-2] bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            />

            {/* Vanta.js birds layer */}
            <div
                ref={vantaRef}
                className="fixed top-0 left-0 w-full h-full z-[-1]"
                style={{ minHeight: "100vh", minWidth: "100vw" }}
            />
        </>
    );
};

export default ParticlesBackground;
