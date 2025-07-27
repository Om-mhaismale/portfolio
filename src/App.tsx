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
    const MINIMUM_LOADING_TIME = 3000; // 3 seconds minimum loading time
    const startTime = Date.now();
    
    const trackLoadingProgress = async () => {
      const totalComponents = componentPromises.length;
      let loadedCount = 0;

      for (const promise of componentPromises) {
        try {
          await promise;
          loadedCount++;
          // Create smoother progress that maxes at 85% before everything is loaded
          const newProgress = (loadedCount / totalComponents) * 85;
          setProgress(newProgress);
          
          // Optional: Add small delay between component loads for visual effect
          await new Promise(resolve => setTimeout(resolve, 200));
        } catch (error) {
          console.error("Failed to load a component:", error);
          // Optionally handle loading errors
        }
      }

      // Calculate remaining time to meet minimum loading time
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MINIMUM_LOADING_TIME - elapsedTime);

      // Slow progress animation from 85% to 100% during remaining time
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          const newValue = prev + 0.5;
          if (newValue >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return newValue;
        });
      }, remainingTime / 30);
      
      // Only hide the loader after minimum time has passed
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => setIsLoading(false), 500); // Slightly longer fade out
      }, remainingTime);
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
          <div className="text-center">
            <p className="text-3xl font-bold mb-4">Loading... {progress.toFixed(0)}%</p>
            <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-400 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
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