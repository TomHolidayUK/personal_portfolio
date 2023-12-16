import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Education from './Components/Education/Education';
import Interests from './Components/Interests/Interests';
import Kyrgyzstan from './Components/Kyrgyzstan/Kyrgyzstan';
import WebDevelopment from './Components/WebDevelopment/WebDevelopment';
import SpiralTransition from './Components/Transitions/SpiralTransition';
import SquareTransition from './Components/Transitions/SquareTransition';
import SpinTransition from './Components/Transitions/SpinTransition';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



function App() {


  // Define Pop Up States and Functions
  const [isReadingPopupOpen, setIsReadingPopupOpen] = useState(false);
  const [isFilmPopupOpen, setIsFilmPopupOpen] = useState(false);
  const handleReadingPopupClick = () => {
    setIsReadingPopupOpen(!isReadingPopupOpen);
  };
  const handleFilmPopupClick = () => {
    setIsFilmPopupOpen(!isFilmPopupOpen);
  };



  const [count, setCount] = useState(0);
  // const [delay, setDelay] = useState(75); 
  const delay = 75;
  const maxCount = 100;
    
  useEffect(() => {
    const interval = setInterval(() => {
      let counterElement = document.querySelector(".counter");
      var rect = document.getElementById("Rect");
      if (count <= maxCount) {
        if (count >= 90) {
          // If count is between 90 and maxCount, increment by 1
          setCount(count + 1);
          counterElement.textContent = count;
          rect.setAttribute("width", (count * 5));
        } else {
          // Otherwise, increment by a random value
          setCount(count + Math.floor(Math.random() * 10));
          counterElement.textContent = count;
          rect.setAttribute("width", (count * 5));
        }
      } else {
        clearInterval(interval); // Stop the interval when count reaches maxCount
      }
    }, delay);
    // Cleanup: Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [count, delay, maxCount]);


  useEffect(() => {
  const tl = gsap.timeline()
  tl.to(".counter", {
    duration: 0.25,
    delay: 3.5,
    opacity: 0,
    scale: 0,
  })
    .to(".loading-bar", {
      duration: 0.1,
      opacity: 0,
    })
    .to(".react-message", {
      duration: 0.1,
      opacity: 0,
    })
    .to(".overlay1", {
      duration: 0.25,
      opacity: 0,
    })
  }, []);



useEffect(() => {
  gsap.to(".animation-title", {
    duration: 3,
    x: -1500,
    scrollTrigger: {
      trigger: ".animation-title",
      start: "center 10%",
      end: "center top",
      toggleActions: "play none reverse none",
      scrub: 1,
      // markers: true
    }
  })
  }, []);

useEffect(() => {
  gsap.to(".animation-img", {
    duration: 3,
    x: 900,
    scrollTrigger: {
      trigger: ".circle",
      start: "center 40%",
      end: "center 25%",
      toggleActions: "play none reverse none",
      scrub: 1,
      // pin: true,
      // markers: true
    }
  })
  }, []);


  useEffect(() => {
  gsap.to(".circle", {
    duration: 1.5,
    scale: 0,
    scrollTrigger: {
      trigger: ".circle",
      start: "center 40%",
      end: "center 25%",
      toggleActions: "play none reverse none",
      scrub: 1,
      // pin: true,
      // markers: true
    }
  })
  }, [])


useEffect(() => {
  gsap.to(".animation-scrollMessage", {
    duration: 3,
    scale: 0,
    opacity: 0,
    y: -400,
    scrollTrigger: {
      trigger: ".animation-scrollMessage",
      start: "center 80%",
      end: "center 65%",
      toggleActions: "play none reverse none",
      scrub: 1,
      // markers: true
    }
  })
  }, []);



  
// // Highlight Text Animation
// gsap.utils.toArray("span").forEach((span) => {
//   ScrollTrigger.create({
//       trigger: span,
//       start: "bottom 60%",
//       toggleClass: "active",
//   })
// })





  return (
    <div className="All">
      <div className="intro-sequence-container">
        <div className="intro-sequence-container2">
          <h1 className="counter">0</h1>
          <div className="overlay1"></div>
          <div className="loading-bar-container">
          <svg className="loading-bar" width="500" height="50" xmlns="http://www.w3.org/2000/svg">
            <rect id="Rect" x="0" y="00" width="0" height="105%" fill="#bcbcc4" />
          </svg>
          </div>
          <h2 className="react-message">This site was created using React</h2>
        </div>
      </div>
      <div className="App">
        <div className="scroll-navbar">
          <div className="container flex">
            {/* <h1 className="logo">Tom Holiday</h1> */}
            <img className="logo" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/Personal/1/Tom+Holiday-logos_black.png' alt="hello"/>
              <nav>
                <ul>
                  <h3 className="nav"><a className="headings clickable-element" href="#webDevelopmentSection">Web Development</a></h3>
                  <h3 className="nav"><a className="headings clickable-element" href="#educationSection"><b>Education</b></a></h3>
                  <h3 className="nav"><a className="headings clickable-element" href="#interestsSection"><b>Interests</b><b/></a></h3>
                  <h3 className="nav"><a className="headings clickable-element" href="#kyrgyzstanSection"><b>Kyrgyzstan 2021</b><b/></a></h3>
                </ul>
              </nav>
          </div>
        </div>
        <div className="main">
          <div id="introSection">
            <h1 className="animation-title">Hi I'm Tom Holiday, welcome to my personal website</h1>
            <div className="photo-container">
              <img className="animation-img" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Other/1.JPG' alt="hello"/> 
              {/* <img className="animation-img" src="1-compressed.jpg" alt="hello" rel="preload"/> */}
              <div className="circle-container">
              <svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
                <circle cx="300" cy="300" r="300" fill="#1a1a1a" />
              </svg>
              </div>
            </div>
            <div className="animation-scrollMessage">
              <h2>Scroll to begin</h2>
              <img className="animation-img2" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/arrow.png' alt="hello"/>
            </div>
          </div>
          <div className="introSection2">
            <h1 className="introtext">I am a <span>Web Developer based in the UK</span> looking for an exciting company to progress with. I am experienced with <span>Javascript, React and GSAP</span> but also have <span>fullstack experience</span> of working with <span>PostgreSQL databases, node.js + express.js servers and API's.</span></h1> 
            <img className="logo" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/Personal/6/Tom+Holiday-logos_black.png' alt="hello"/>
          </div>
          <SquareTransition />
          {/* <SpiralTransition /> */}
          <WebDevelopment/>
          <SpinTransition />
          <Education/>
          <SpinTransition />
          <Interests 
            callhandleReadingPopupClick={handleReadingPopupClick}
            isReadingPopupOpen={isReadingPopupOpen}
            callhandleFilmPopupClick={handleFilmPopupClick}
            isFilmPopupOpen={isFilmPopupOpen}
          />
          <SpinTransition />
          <Kyrgyzstan/>
        </div>
        <div className="scroll-footer">
          <div className="container grid-3">
            <div className="copyright">
              <h3>tom.holiday@mac.com</h3>
              <h3>+44 7849016844</h3>
            </div>
            <nav className="links">
              <h5>*This website was created using Javascript, the React framework and GSAP Animation*</h5>
              {/* <ul>
                <li><a href="" className="outline">Home</a></li>
                <li><a href="" className="outline">Tutors</a></li>
                <li><a href="" className="outline">Categories</a></li>
                <p>This website was created using </p>
              </ul> */}
            </nav>
            <div className="profiles-container">
              {/* <h5>Find me here:</h5> */}
              <div className="profiles">
                {/* <a href=""><em className="fab fa-twitter fa-2x"></em></a> */}
                <a className="clickable-element underline" href="https://www.linkedin.com/in/thomas-holiday2815" target="_blank" rel="noopener noreferrer"><em className="fab fa-linkedin fa-2x"></em></a>
                <a className="clickable-element underline" href="https://instagram.com/tomholiday?igshid=MzMyNGUyNmU2YQ==" target="_blank" rel="noopener noreferrer"><em className="fab fa-instagram fa-2x"></em></a>
                {/* <a className="clickable-element underline" href="https://www.facebook.com/tom.holiday.92?mibextid=D4KYlr" target="_blank" rel="noopener noreferrer"><em className="fab fa-facebook fa-2x"></em></a> */}
                <a className="clickable-element underline" href="https://wa.me/447849016844" target="_blank" rel="noopener noreferrer"><em className="fab fa-whatsapp fa-2x"></em></a>
                <a className="clickable-element underline" href="https://youtube.com/@tomholiday563?si=HJSe3BgLctQrwkm6" target="_blank" rel="noopener noreferrer"><em className="fab fa-youtube fa-2x"></em></a>
                <a className="clickable-element underline" href="https://github.com/TomHolidayUK" target="_blank" rel="noopener noreferrer"><em className="fab fa-github fa-2x"></em></a>
                <a className="clickable-element underline" href="https://www.strava.com/athletes/55351253" target="_blank" rel="noopener noreferrer"><em className="fab fa-strava fa-2x"></em></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
