
import { useState } from 'react';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  
  // Your beautiful photos together
  const photos = [
    {
      id: 1,
      src: "/lovable-uploads/b7cde2f2-f622-49a8-b1fb-5bcaec116aff.png",
      caption: "Our hands intertwined, together forever 💕",
      date: "A promise of love and connection"
    },
    {
      id: 2,
      src: "/lovable-uploads/dee58479-ce74-4b3e-ae90-df282b36f2a6.png",
      caption: "Sweet moments and beautiful smiles ✨",
      date: "When happiness radiates from within"
    },
    {
      id: 3,
      src: "/lovable-uploads/b36a351f-d974-419a-89ec-86af130c0f07.png",
      caption: "Dressed up and looking stunning together 💫",
      date: "Every moment feels like a celebration"
    },
    {
      id: 4,
      src: "/lovable-uploads/848a81e0-8298-474e-9233-8e4f3f070601.png",
      caption: "Timeless love in black and white 🖤",
      date: "Some moments are perfectly classic"
    },
    {
      id: 5,
      src: "/lovable-uploads/3c8c5608-1286-459d-bb26-71b3d7ce64f7.png",
      caption: "Adventure buddies for life 🌟",
      date: "Making memories wherever we go"
    },
    {
      id: 6,
      src: "/lovable-uploads/7a0164b1-7449-4af1-9008-a1084f265c2e.png",
      caption: "Golden hour magic with you ☀️",
      date: "You make every moment shine brighter"
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
