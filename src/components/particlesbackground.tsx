import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';

const VantaCloudsBackground: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Vanta only if it hasn't been initialized yet
    if (!vantaEffect && vantaRef.current) {
      const effect = CLOUDS({
        el: vantaRef.current,
        THREE: THREE, // Use the 'three' package
        mouseControls: true,
        touchControls: true,
        gyroControls: false, // Keep this false to save resources
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: 0x1a2f33,
        cloudColor: 0x0,
        speed: 1.5, // Reduced speed slightly for better performance
        scale: 1.0, // Default scale
        scaleMobile: 0.7, // Reduce scale on mobile for performance
      });
      setVantaEffect(effect);
    }

    // This is the cleanup function that runs when the component unmounts
    // It's crucial for preventing memory leaks
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]); // Only re-run the effect if vantaEffect changes

  return <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full z-[-1]" />;
};

export default VantaCloudsBackground;