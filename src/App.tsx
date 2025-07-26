// src/app.tsx
import { useState, useEffect, lazy, Suspense } from 'react';
const About = lazy(() => import('./components/about'));
const Navbar = lazy(() => import('./components/navbar'));
const ParticlesBackground = lazy(() => import('./components/particlesbackground'));
const Skills = lazy(() => import('./components/skills'));
const Projects = lazy(() => import('./components/projects'));
const Experiences = lazy(() => import('./components/experiences'));
const Contacts = lazy(() => import('./components/contacts'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const simulateLoading = async () => {
      // Simulate asynchronous loading of data or assets
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate initial delay

      intervalId = setInterval(() => {
        setProgress((prevProgress) => {
          const increment = Math.random() * 5 + 5; // Vary increment for realism
          let newProgress = prevProgress + increment;

          if (newProgress >= 100) {
            clearInterval(intervalId);
            newProgress = 100;
            setTimeout(() => setIsLoading(false), 300); // Small delay before hiding loader
          }
          return newProgress;
        });
      }, 50); // Adjust for smoother animation
    };

    simulateLoading();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black text-white z-50">
          <p className="text-3xl font-bold">Loading... {progress.toFixed(0)}%</p>
        </div>
      ) : (
        <Suspense fallback={null}>
          <ParticlesBackground />
          <Navbar />
          <About />
          <Skills />
          <Projects />
          <Experiences />
          <Contacts />
        </Suspense>
      )}
    </>
  );
}

export default App;