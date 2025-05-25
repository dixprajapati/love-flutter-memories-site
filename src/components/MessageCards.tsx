
import { useState } from 'react';

const MessageCards = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const messages = [
    {
      id: 1,
      front: "What I Love About You 💖",
      back: "Your laugh that fills every room with sunshine, your kindness that touches everyone you meet, and the way you make ordinary moments feel extraordinary.",
      gradient: "from-pink-400 to-rose-500"
    },
    {
      id: 2,
      front: "My Favorite Memory 🌟",
      back: "That rainy Sunday when we stayed in bed all day, talking about our dreams and building castles in the air. In that moment, I knew I wanted to dream with you forever.",
      gradient: "from-purple-400 to-indigo-500"
    },
    {
      id: 3,
      front: "Why You're Special ✨",
      back: "You see beauty where others see ordinary. You bring out the best in everyone around you. You make me want to be a better person every single day.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      id: 4,
      front: "Our Future Together 🌈",
      back: "I see lazy Sunday mornings, spontaneous adventures, growing old together while still feeling young at heart, and loving you more with each passing day.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      id: 5,
      front: "Birthday Wish 🎂",
      back: "May this new year bring you all the happiness you deserve, all the adventures you crave, and all the love your beautiful heart can hold.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      id: 6,
      front: "Forever & Always 💕",
      back: "Through every season, every challenge, every celebration - I choose you. Today, tomorrow, and for all the tomorrows that follow.",
      gradient: "from-red-400 to-pink-500"
    }
  ];

  const handleCardFlip = (id: number) => {
    setFlippedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-script gradient-text mb-6">
            Messages From My Heart 💌
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Click each card to reveal a special message written just for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`relative h-64 cursor-pointer animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleCardFlip(message.id)}
            >
              {/* Card container with flip effect */}
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flippedCards.includes(message.id) ? 'rotate-y-180' : ''
              }`}>
                
                {/* Front of card */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-gradient-to-br ${message.gradient} p-8 flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-script text-white text-center leading-relaxed">
                      {message.front}
                    </h3>
                    <div className="mt-4 text-white/80 text-sm">
                      Click to read →
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-white/90 backdrop-blur-sm border border-white/20 p-8 flex items-center justify-center shadow-lg`}>
                  <div className="text-center">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {message.back}
                    </p>
                    <div className="mt-4 text-gray-500 text-sm">
                      ← Click to flip back
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special message at the bottom */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
          <div className="bg-gradient-romantic rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-4xl md:text-5xl font-script text-white mb-6">
              Happy Birthday, My Love! 🎉
            </h3>
            <p className="text-xl text-white/90 leading-relaxed">
              You are my sunshine on cloudy days, my anchor in stormy seas, and my greatest adventure. 
              Here's to another year of creating beautiful memories together. I love you more than words can express! 💖
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageCards;
