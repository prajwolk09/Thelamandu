import React, { useState, useEffect } from 'react';
import dalBhatBg from '@/assets/delicious-food-table.jpg';
import selRotiBg from '@/assets/momo.jpg';
import chatpateBg from '@/assets/wings.jpg';

const backgroundImages = [
  dalBhatBg,
  selRotiBg,
  chatpateBg,
];

export const BackgroundSlideshow: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-30' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Nepali food background ${index + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
      ))}
    </div>
  );
};