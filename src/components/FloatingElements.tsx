
import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    emoji: string;
    x: number;
    y: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const floatingEmojis = ['💖', '✨', '🌟', '💕', '🦋', '🌸', '💐', '🎈', '💫', '🌙'];
    
    const generateElements = () => {
      return Array.from({ length: 15 }, (_, i) => ({
        id: i,
        emoji: floatingEmojis[Math.floor(Math.random() * floatingEmojis.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4
      }));
    };

    setElements(generateElements());
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute text-2xl opacity-20 animate-float"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        >
          {element.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
