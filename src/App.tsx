// src/app.tsx
import { useState, useEffect, lazy, Suspense } from 'react';
import VideoBackground from './components/background'; // Import background directly

// Keep the lazy imports, but remove the background
const About = lazy(() => import('./components/about'));
const Navbar = lazy(() => import('./components/navbar'));
const Skills = lazy(() => import('./components/skills'));
const Projects = lazy(() => import('./components/projects'));
const Experiences = lazy(() => import('./components/experiences'));
const Contacts = lazy(() => import('./components/contacts'));

// Array of promises for each component import, excluding the background
const componentPromises = [
  import('./components/navbar'),
  import('./components/about'),
  import('./components/skills'),
  import('./components/projects'),
  import('./components/experiences'),
  import('./components/contacts'),
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const trackLoadingProgress = async () => {
      const totalComponents = componentPromises.length;
      let loadedCount = 0;

      for (const promise of componentPromises) {
        try {
          await promise;
          loadedCount++;
          const newProgress = (loadedCount / totalComponents) * 100;
          setProgress(newProgress);
        } catch (error) {
          console.error("Failed to load a component:", error);
          // Optionally handle loading errors
        }
      }

      // Ensure progress reaches 100% and then hide the loader
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => setIsLoading(false), 300); // Delay before hiding loader
      }, 100);
    };

    trackLoadingProgress();
  }, []);

  return (
    <>
      {/* Render the background permanently */}
      <VideoBackground />

      {isLoading ? (
        // Loading screen is now transparent to show the background
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 text-white z-50">
          <p className="text-3xl font-bold">Loading... {progress.toFixed(0)}%</p>
        </div>
      ) : (
        // Main content also renders over the background
        <Suspense fallback={<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 text-white z-50"><p></p></div>}>
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