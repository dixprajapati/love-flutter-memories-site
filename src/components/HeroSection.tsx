
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Happy Birthday, Beautiful! 🎉",
    "You Light Up My World ✨",
    "Every Moment With You Is Magic 💫",
    "My Heart Belongs To You 💖"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-romantic flex items-center justify-center">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl animate-float">🎈</div>
        <div className="absolute top-40 right-20 text-4xl animate-float" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-float" style={{ animationDelay: '2s' }}>🌟</div>
        <div className="absolute bottom-20 right-10 text-6xl animate-float" style={{ animationDelay: '3s' }}>💖</div>
        <div className="absolute top-60 left-1/3 text-3xl animate-float" style={{ animationDelay: '4s' }}>🦋</div>
        <div className="absolute top-80 right-1/3 text-4xl animate-float" style={{ animationDelay: '5s' }}>🌸</div>
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-script text-white mb-8 leading-tight">
            {texts[currentText]}
          </h1>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Today we celebrate the most amazing person in my life. 
            <br />
            This website is filled with our precious memories and all the love I have for you.
          </p>
        </div>

        <div className="animate-scale-in" style={{ animationDelay: '1s' }}>
          <button 
            onClick={() => document.getElementById('photos')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Explore Our Journey Together 💕
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
