import React, { useEffect, useState } from 'react';
import './AutoScroll.css';

function AutoScroll() {


// FULLY AUTOMATIC CAROUSEL

const[index, setIndex] = useState(0);

const cards = [
  {
    id: "1",
    image: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Running/1.JPEG',
  },
  {
    id: "2",
    image: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Running/2.JPEG',
  },
  {
    id: "3",
    image: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Running/3.jpeg'
  },
];


const mod = (n, m) => {
  let result = n % m;

  // Return a positive value
  return result >= 0 ? result : result + m;
};

useEffect(() => {
  // setTimeout is used to increment the state every 3s
  setTimeout(() => {
    // 
    setIndex((index + 1) % cards.length);
    // console.log(index);
  }, 3000);
}, [index, cards.length]);

  return (
    <div className='carousel2-container'>
      <div className="carousel2">
      
      {cards.map((item, i) => {
      const indexLeft = mod(index - 1, cards.length);
      const indexRight = mod(index + 1, cards.length);

      let className = "card";

      if (i === index) {
          className = "card card--active";
      } else if (i === indexRight) {
          className = "card card--right";
      } else if (i === indexLeft) {
          className = "card card--left";
      } else className = "card";

      return (
          <img
          key={item.id}
          className={className}
          src={item.image}
          alt="Comic"
          ></img>
      );
      })}
    
    </div>
</div>
  );
}

export default AutoScroll;




