import React, { useEffect } from 'react';
import './SpiralTransition.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SpiralTransition() {

    // useEffect(() => {
// const tl = gsap.timeline({
//   scrollTrigger: {
//     scrub: 1,
//     pin: true,
//     trigger: ".square",
//     start: "50% 50%",
//     // endTrigger: ".square-wrap",
//     end: "bottom 50%",
//     // start: "bottom 23%", // Trigger start point
//     // end: "bottom top", // Trigger end point
//     markers: true
//   },
// });

// // tl.to(".square", {
// //   rotateZ: 360,
// // });

// }, []);


    useEffect(() => {
            gsap.to('.spiral', {
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.spiral',
                start: "center 60%",
                end: "center 40%",
                toggleActions: "restart none none none",
                scrub: 1,
                pin: true,
                markers: true
            }
            })
        }, []);



  return (
    <div>
        <div className="spiral-container"> 
            <svg className="spiral" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                <rect width="100%" height="100%" fill="#4CAF50" />
            </svg>
            {/* <img className="spiral" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/Personal/1/Tom+Holiday-logos_black.png' alt="hello"/> */}
        </div>
    </div>
  );
}

export default SpiralTransition;










