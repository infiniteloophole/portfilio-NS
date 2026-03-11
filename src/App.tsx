import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageContainer } from './components/layout/PageContainer';
import { Navbar } from './components/layout/Navbar';
import { SignatureSplash } from './components/sections/SignatureSplash';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Highlights } from './components/sections/Highlights';
import { Work } from './components/sections/Work';
import { Experience } from './components/sections/Experience';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

function App() {
  const [showSignature, setShowSignature] = useState(true);

  return (
    <>
      {/* SVG Filters for pen/paper effects */}
      <svg style={{ display: 'none' }}>
        <defs>
          <filter id="roughen">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
          </filter>
          <filter id="sketch">
            <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="4" result="noise" seed="2" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>
      </svg>

      <AnimatePresence mode="wait">
        {showSignature && (
          <SignatureSplash onComplete={() => setShowSignature(false)} />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <PageContainer>
            <Navbar />
            <Hero />
            <Services />
            <Highlights />
            <Work />
            <Experience />
            <About />
            <Contact />
          </PageContainer>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
