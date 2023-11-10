import React, { useEffect } from 'react';
import './SquareTransition.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SquareTransition() {


    useEffect(() => {
        const itemsToAnimate = gsap.utils.toArray('.square');
        itemsToAnimate.forEach(item => {
            gsap.to(item, {
            duration: 0.5,
            scale: 1.25,
            // ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "center 60%",
                end: "center 40%",
                toggleActions: "play none reverse none",
                scrub: 1,
                // markers: true
            }
            })
        });
        }, []);



  return (
    <div>
        <div className="square-container"> 
            <svg className="square" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                <rect width="100%" height="100%" fill="grey" />
            </svg>
            <svg className="square" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                <rect width="100%" height="100%" fill="grey" />
            </svg>
            <svg className="square" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                <rect width="100%" height="100%" fill="grey" />
            </svg>
        </div>
    </div>
  );
}

export default SquareTransition;



