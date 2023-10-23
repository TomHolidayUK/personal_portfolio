import React, { useEffect, useState } from 'react';
import './HybridScroll.css';

function HybridScroll() {

  // AUTOMATIC AND MANUAL CAROUSEL

  // State to keep track of the currently displayed image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image URLs for the carousel
  const images = [
    // 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/mbda.png',
    // 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/qinetiq.png',
    // 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/blastech.png',
    // 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/ansys.png',
    // 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/BAE.png',
    // 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/dynalloy.png',
    'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/ellis brigham3.png',
    'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/expedition foods.png',
    'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/mission.png',
    'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/powertraveller4.png',
    'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/samaya.avif',
    // 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/sheffield.png',
    'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/torq.png'
  ];


  // Function to advance to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go back to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Effect to automatically advance the carousel every 3 seconds
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const timer = setInterval(nextImage, 3000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }); // Empty dependency array means this effect runs once after initial render


  return (
    <div className="carousel">
        <button onClick={prevImage}>Previous</button>
        <img src={images[currentIndex]} alt={`${currentIndex + 1}`}/>
        <button onClick={nextImage}>Next</button>
    </div>
  );
}

export default HybridScroll;
