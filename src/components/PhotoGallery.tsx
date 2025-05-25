
import { useState } from 'react';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  
  // Sample photos - you can replace these with your actual photos
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop&crop=center",
      caption: "Our first adventure together 💫",
      date: "Where it all began"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=500&fit=crop&crop=center",
      caption: "Cozy moments that mean everything 🏠",
      date: "Home is wherever you are"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=500&fit=crop&crop=center",
      caption: "Making memories in our special place 💕",
      date: "Every corner holds our story"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop&crop=center",
      caption: "Laughing until our cheeks hurt 😄",
      date: "Joy in every moment"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=500&fit=crop&crop=center",
      caption: "Quiet moments, loud love 💖",
      date: "In your arms, I'm home"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=500&fit=crop&crop=center",
      caption: "Dancing through life together 💃",
      date: "You make every day feel like magic"
    }
  ];

  return (
    <section id="photos" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-script gradient-text mb-6">
            Our Beautiful Moments 📸
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each photo tells a story of us, captured in time but living forever in our hearts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedPhoto(photo.id)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-script text-xl mb-2">{photo.caption}</p>
                  <p className="text-sm opacity-90">{photo.date}</p>
                </div>
              </div>

              {/* Floating heart on hover */}
              <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse">
                💖
              </div>
            </div>
          ))}
        </div>

        {/* Photo modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] animate-scale-in">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white text-4xl hover:scale-110 transition-transform"
              >
                ✕
              </button>
              <img
                src={photos.find(p => p.id === selectedPhoto)?.src}
                alt=""
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white rounded-b-2xl">
                <p className="font-script text-2xl mb-2">
                  {photos.find(p => p.id === selectedPhoto)?.caption}
                </p>
                <p className="opacity-90">
                  {photos.find(p => p.id === selectedPhoto)?.date}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
