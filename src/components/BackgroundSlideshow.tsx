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
    }, 7000); // Slower transition for subtlety

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Solid golden base background */}
      <div className="absolute inset-0 bg-[#EB9324]"></div>
      
      {/* Subtle image overlays */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Nepali food background ${index + 1}`}
            className="h-full w-full object-cover"
          />
          {/* Heavy golden overlay to maintain the solid golden appearance */}
          <div className="absolute inset-0 bg-[#EB9324]/85" />
          
          {/* Additional texture overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 2px, transparent 2px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      ))}
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#EB9324]/30"></div>
    </div>
  );
};