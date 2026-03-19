import { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar';
import About from './pages/About';
import Tree from './pages/Tree';
import Questionnaire from './pages/Questionnaire';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AnimatedContent from './components/AnimatedContent';
import Grainient from './components/Grainient';


// use this for as default
const darkPalette = { 
  color1: '#19241b',
  color2: '#41304f',
  color3: '#34282d'
};

// palette for when user inputs "positive word"
const lightPalette = {
  color1: '#6f8b73',
  color2: '#e69ee4',
  color3: '#9c4049'
};

function Home({ onGetStarted }) {
  return (
    <div className="home-panel">
      <h1>Your words shape the world around you.</h1>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1.0}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0.5}
      >
        <button onClick={onGetStarted}>Get Started</button>
      </AnimatedContent>
    </div>
  );
}

function AppShell({ onGetStarted }) {
  const location = useLocation();
  const isQuestionnaire = location.pathname === '/questionnaire';

  return (
    <div className={`app-content ${isQuestionnaire ? 'app-content--questionnaire' : ''}`}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home onGetStarted={onGetStarted} />} />
        <Route path="/about" element={<About />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>
    </div>
  );
}

function App() {
  const [palette, setPalette] = useState(darkPalette);


  function togglePalette() {
    setPalette(current =>
      current.color1 === darkPalette.color1 ? lightPalette : darkPalette
    );
  }

  return (
    <div className="app-root">
      <div className="app-background">
        <div style={{ position: 'absolute', inset: 0 }}>
          <Grainient
            color1={palette.color1}
            color2={palette.color2}
            color3={palette.color3}
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={2.25}
            warpFrequency={8.2}
            warpSpeed={6}
            warpAmplitude={43}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>
      </div>

      <Router>
        <AppShell onGetStarted={togglePalette} />
      </Router>
    </div>
  );
}


export default App
