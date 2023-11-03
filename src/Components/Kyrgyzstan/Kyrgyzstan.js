import React from 'react';
import './Kyrgyzstan.css';
// import { useEffect, useState } from 'react';
import HybridScroll from '../ScrollComponents/HybridScroll/HybridScroll';   
import gsap from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HyperlinkLogo from '../HyperlinkLogo/HyperlinkLogo';

gsap.registerPlugin(ScrollTrigger);


const Kyrgyzstan = () => {

// useEffect(() => {
//     gsap.from(".text1", {
//         // duration: 3,
//         x: -1500,
//         scrollTrigger: {
//         trigger: ".text1",
//         start: "center 90%",
//         end: "center 80%",
//         toggleActions: "play none reverse none",
//         scrub: 2,
//         // markers: true
//         }
//     })
//     }, []);

// Highlight Text Animation
gsap.utils.toArray("span").forEach((span) => {
    ScrollTrigger.create({
        trigger: span,
        start: "bottom 60%",
        toggleClass: "active",
    })
  })
  

return (
<div id="kyrgyzstanSection">
    <h2><b>Kyrgyzstan Expedition 2021</b></h2>
    <p className="text1">In 2021 I was very lucky to be part of the organisation team of a mountaineering expedition to Kyrgyzstan. The team consisted of young group of British and Polish mountaineers.</p>
    <p>The expedition was hugely succesful with the team establishing <span>7 first ascents</span> and I was personally part of 2 of them with 1 being a solo effort <b><u><a className="clickable-element underline" href="https://www.google.com/maps/place/42%C2%B005'48.4%22N+78%C2%B046'12.4%22E/@42.0967773,78.7598114,3066m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d42.0967778!4d78.7701111?entry=ttu" target="_blank" rel="noopener noreferrer">Holiday Hill - 4105m<HyperlinkLogo/></a></u></b></p>
    <div className="iframe-container">
        <iframe className="video1" src="https://www.youtube.com/embed/HdyVR00QpVY?si=g7kVByNUbhX8UXrs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <p className="text2">The logistics of this trip were immense. Due to the nature of us being left isolated in an extreme location, everything including food, insurance, kit, travel, emergency options, first aid etc had to be stringently organised. Thankfully everything went smoothly and I hope to do something similar in the future.</p>
    <p>More information <b><u><a className="clickable-element underline" href="https://www.danaio.com/ky21-expedition-report" target="_blank" rel="noopener noreferrer">here<HyperlinkLogo/></a></u></b></p>
    <p className="text3">We collaborated with 7 different sponsors who helped us with food, tents, solar charging devices and clothing.</p>
    <div className="hybridScroll-container">
        <HybridScroll/>
    </div>
    <div className="img-container">
        <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Climbing/1.jpg' alt="hello1" loading="lazy"/>
        <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Climbing/2.jpg' alt="hello2" loading="lazy"/>
        <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Climbing/3.jpg' alt="hello3" loading="lazy"/>
        <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Climbing/4.jpg' alt="hello4" loading="lazy"/>
        <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Climbing/6.jpg' alt="hello5" loading="lazy"/>
        <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Climbing/17.jpg' alt="hello5" loading="lazy"/>
        <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Climbing/16.jpg' alt="hello7" loading="lazy"/>
        <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Climbing/20.jpg' alt="hello11" loading="lazy"/>
        <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Climbing/15.JPG' alt="hello6" loading="lazy"/>
        <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Climbing/21.JPG' alt="hello12" loading="lazy"/>
        <img className="mel" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Climbing/5.png' alt="hello13" loading="lazy"/>
        <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Climbing/7.JPEG' alt="hello14" loading="lazy"/>
    </div>
    <img className="logo-kyrg" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/Personal/3/Tom Holiday-logos_black.png' alt="hello"/>
</div>
);
}

export default Kyrgyzstan;