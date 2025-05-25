
import HeroSection from '../components/HeroSection';
import PhotoGallery from '../components/PhotoGallery';
import MemoryTimeline from '../components/MemoryTimeline';
import MessageCards from '../components/MessageCards';
import FloatingElements from '../components/FloatingElements';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingElements />
      <HeroSection />
      <PhotoGallery />
      <MemoryTimeline />
      <MessageCards />
      
      {/* Footer */}
      <footer className="bg-gradient-romantic py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-2xl font-script text-white mb-4">
            Made with endless love 💖
          </p>
          <p className="text-white/80">
            Every pixel placed with care, every animation crafted with love
          </p>
          <div className="mt-8 text-4xl animate-pulse">
            💕 👑 💕
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
