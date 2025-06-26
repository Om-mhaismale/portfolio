// src/app.tsx
import About from './components/about';
import Navbar from './components/navbar'
import ParticlesBackground from './components/particlesbackground';
// import './index.css'
// import './App.css'

function App() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <About/>
      
    </>
  )
}

export default App