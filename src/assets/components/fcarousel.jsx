// src/Carousel.js
import React, { useState, useEffect } from 'react';
import S1 from './s1.png';
import S2 from './s2.png';
import S3 from './s3.png';

const images = [
  S1,
  S2,
  S3,
];

const imagesToShow = 2; // Number of images to show at once
const imageGap = 4; // Gap between images in Tailwind spacing units (e.g., 4 = 1rem or 16px)

const fcarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const imageWidth = 384; // Example width in pixels for image
  const gapWidth = 16; // Example gap width in pixels
  const totalWidth = imageWidth + gapWidth;

  return (
    <div className="relative overflow-hidden w-full h-64 mx-auto">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * totalWidth}px)` }}
      >
        {images.concat(images).map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: imageWidth, marginRight: gapWidth }}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default fcarousel;
