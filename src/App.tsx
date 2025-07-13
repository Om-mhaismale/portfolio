// src/app.tsx
import About from './components/about';
import Navbar from './components/navbar'
import ParticlesBackground from './components/particlesbackground';
import Skills from './components/skills';
import Projects from './components/projects';
import Experiences from './components/experiences';
import Contacts from './components/contacts';
// import './index.css'
// import './App.css'

function App() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <About/>
      <Skills />
      <Projects/>
      <Experiences/>
      <Contacts />
    </>
  )
}

export default App