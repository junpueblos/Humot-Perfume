
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LuxuryEdition from './components/LuxuryEdition';
import ProductSpotlight from './components/ProductSpotlight';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

/**
 * Checklist for User:
 * 1. Replace Logo: In Header.tsx and Footer.tsx, update the SVG/Img for "HUMOT".
 * 2. Hero Images: Update placeholders in Hero.tsx with high-res bottle photography.
 * 3. Product Shots: In LuxuryEdition.tsx and ProductSpotlight.tsx, swap placeholders.
 * 4. Content: Edit text in AboutUs.tsx and contact details in Footer.tsx.
 * 5. Fonts: Update index.html Google Fonts link if different typography is required.
 * 6. CTA Links: Wire up button clicks in Header, Hero, and Product sections.
 */

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-humot-dark selection:bg-humot-gold selection:text-humot-dark">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <LuxuryEdition />
        <ProductSpotlight />
        <AboutUs />
      </main>

      <Footer />
    </div>
  );
};

export default App;
