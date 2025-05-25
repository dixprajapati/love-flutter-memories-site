
import { useState, useEffect, useRef } from 'react';

const MemoryTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const memories = [
    {
      id: 1,
      date: "First Meeting",
      title: "When Our Eyes First Met ✨",
      description: "That magical moment when I knew my world was about to change forever. Your smile lit up the entire room and my heart hasn't been the same since.",
      icon: "💫",
      color: "from-pink-400 to-purple-500"
    },
    {
      id: 2,
      date: "First Date",
      title: "Coffee & Endless Conversations ☕",
      description: "Three hours felt like three minutes. We talked about everything and nothing, and I knew I wanted to have conversations like this for the rest of my life.",
      icon: "💕",
      color: "from-purple-400 to-blue-500"
    },
    {
      id: 3,
      date: "First 'I Love You'",
      title: "Three Words That Changed Everything 💖",
      description: "Under the starlit sky, those three little words slipped out naturally, as if they had been waiting their whole lives to be spoken to you.",
      icon: "🌟",
      color: "from-blue-400 to-green-500"
    },
    {
      id: 4,
      date: "Our First Trip",
      title: "Adventures & New Discoveries 🌍",
      description: "Exploring new places together, getting lost and finding our way back, creating stories that we'll tell for years to come.",
      icon: "✈️",
      color: "from-green-400 to-yellow-500"
    },
    {
      id: 5,
      date: "Moving In Together",
      title: "Building Our Home 🏠",
      description: "Not just sharing a space, but creating a sanctuary filled with laughter, love, and the beautiful chaos of our daily life together.",
      icon: "🏡",
      color: "from-yellow-400 to-pink-500"
    },
    {
      id: 6,
      date: "Today",
      title: "Celebrating You & Us 🎉",
      description: "Every day with you is a gift. Today we celebrate not just your birthday, but the incredible journey we're on together.",
      icon: "🎂",
      color: "from-pink-500 to-purple-600"
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems(prev => [...prev, id]);
          }
        });
      },
      { threshold: 0.3 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-id]');
    elements.forEach(el => observerRef.current?.observe(el));
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-script gradient-text mb-6">
            Our Love Story Timeline 💕
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every milestone, every moment, every memory that brought us closer together
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 to-purple-400 rounded-full"></div>

          {memories.map((memory, index) => (
            <div
              key={memory.id}
              data-id={memory.id}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              } ${
                visibleItems.includes(memory.id) 
                  ? index % 2 === 0 
                    ? 'animate-fade-in-left' 
                    : 'animate-fade-in-right'
                  : 'opacity-0'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r ${memory.color} rounded-full flex items-center justify-center text-2xl shadow-lg z-10 animate-pulse-slow`}>
                {memory.icon}
              </div>

              {/* Content card */}
              <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              }`}>
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full text-sm font-medium text-purple-800 mb-4">
                    {memory.date}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-script text-gray-800 mb-4">
                    {memory.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {memory.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryTimeline;
