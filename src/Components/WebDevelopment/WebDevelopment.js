import React from 'react';
import './WebDevelopment.css';
import ManualScroll from '../ScrollComponents/ManualScroll/ManualScroll'; 
import HyperlinkLogo from '../HyperlinkLogo/HyperlinkLogo';
import { useEffect, useState } from 'react';
import gsap from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from 'typewriter-effect';
gsap.registerPlugin(ScrollTrigger);

const WebDevelopment = () => {

// Highlight Text Animation
gsap.utils.toArray("span").forEach((span) => {
    ScrollTrigger.create({
        trigger: span,
        start: "bottom 70%",
        toggleClass: "active",
        // markers: true
    })
  })


useEffect(() => {
const itemsToAnimate = gsap.utils.toArray('.fade-animation');
itemsToAnimate.forEach(item => {
  gsap.to(item, { 

    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: item,  
      start: 'center 80%',
      end: 'center 70%',
      toggleActions: 'play none none none',
      scrub: true,
    //   markers: true,
    }
  })
});
}, []);

useEffect(() => {
    const itemsToAnimate = gsap.utils.toArray('.move-animation-right');
    itemsToAnimate.forEach(item => {
      gsap.to(item, { 
        x: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,  
          start: 'top 80%',
          end: 'center 70%',
          toggleActions: 'play none none reverse',
        //   scrub: true,
          scrub: 2,
        //   markers: true,
        }
      })
    });
    }, []);

useEffect(() => {
    const itemsToAnimate = gsap.utils.toArray('.move-animation-left');
    itemsToAnimate.forEach(item => {
        gsap.to(item, { 
        x: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: item,  
            start: 'top 80%',
            end: 'center 70%',
            toggleActions: 'play none none reverse',
          //   scrub: true,
            scrub: 2,
          //   markers: true,
        }
        })
    });
    }, []);

   
    function TypewriterEffect({ text, autoStart }) {
        return (
          <Typewriter
            options={{
              strings: [text],
              autoStart: autoStart,
              pauseFor: 20000,
              loop: true,
              delay: 25,
              deleteSpeed: 100,
            }}
          />
        );
      }
   
   
    // Typewriter Effect
    const [startTypewriter, setStartTypewriter] = useState(false);

    const startTyping = () => {
        setStartTypewriter(true);
    };

    useEffect(() => {
    // gsap.utils.toArray("typewriter-effect").forEach((span) => {
    // const itemsToAnimate = gsap.utils.toArray('.typewriter-effect');
    // itemsToAnimate.forEach(item => {
    ScrollTrigger.create({
        // trigger: span,
        // trigger: item,
        trigger: ".typewriter-effect",
        onEnter: startTyping,
        start: "top 60%",
        // markers: true
   
      });
    // });
    // })
    }, []);
    // TRY USING <TypewriterEffect> TYPE LIKE IN APP.JS ScrollTrigger.create
    

return (
    <div className="introSection3">
        <div id="webDevelopmentSection">
            {/* <h1><b>Web Development</b></h1>
            <p>Here I present my website portfolio aswell as my skills and professional experience.</p>
            <p>---------</p> */}
            <div className="website-container">
                <div className="website-container2 ">
                    <h1 className="fade-animation"><b>Web Development</b></h1>
                    <p className="fade-animation">Here I present my website portfolio aswell as my skills and professional experience.</p>
                    <p className="fade-animation">---------</p>
                    <h2 className="fade-animation" id="frenchvocabGame"><b>French Vocabulary Game Website</b></h2>
                    <p className="fade-animation">This is a game for learning French Vocabulary. I made this for personal use as I used a similar game to learn Spanish and discovered that nothing like it existed for French.</p>
                    <div className="website-container3 fade-animation">
                        <iframe title="French Website" src="https://learn-french-vocabulary-7c5e012473d2.herokuapp.com/"></iframe>
                    </div>
                    <div className='button-container fade-animation'>
                        <button><p><b><u><a className="clickable-element" href="https://learn-french-vocabulary-7c5e012473d2.herokuapp.com" target="_blank" rel="noopener noreferrer">Visit Website<HyperlinkLogo/></a></u></b></p></button>
                        <button><p><b><u><a className="clickable-element" href="https://github.com/TomHolidayUK/French-Vocab-App" target="_blank" rel="noopener noreferrer">Github Files<HyperlinkLogo/></a></u></b></p></button>
                    </div>
                    <p className="fade-animation">Since deployment, I have found it useful for myself and received positive feedback from others. This led me to create <b><u><a className="clickable-element underline" href="https://learn-german-vocab-2033eb22798e.herokuapp.com/" target="_blank" rel="noopener noreferrer">a German version<HyperlinkLogo/></a></u></b> aswell. I am still making updates to both these versions.</p>
                </div>
                <p>-----</p>
                <div className="website-container2 ">
                    <h2 className="fade-animation"><b>Image Recognition Website</b></h2>
                    <p className="fade-animation">This was the first website I ever created. Whilst many of the features were taken from an Udemy course I also added many features myself.</p>
                    <div className="website-container3 fade-animation">
                        <iframe title="Image Recognition Website" src="https://image-recognition-31edcad2b7de.herokuapp.com/" ></iframe>
                    </div>
                    <div className='button-container fade-animation'>
                        <button><p><b><u><a className="clickable-element" href="https://image-recognition-31edcad2b7de.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit Website<HyperlinkLogo/></a></u></b></p></button>
                        <button><p><b><u><a className="clickable-element" href="https://github.com/TomHolidayUK/Image-Recognition-AI-Front-End-" target="_blank" rel="noopener noreferrer">Github Files<HyperlinkLogo/></a></u></b></p></button>
                    </div>
                    <p className="fade-animation">The site uses an Image Recognition API from Clarifai to extract 3 pieces of data from an image:</p>
                    <ul className="styled-list">
                        <span>
                        <li className="fade-animation">The number of faces contained within the image</li>
                        <li className="fade-animation">The colours contained in the image</li>
                        <li className="fade-animation">A prediction of the subject of the image</li>
                        </span>
                    </ul>
                    <p className="fade-animation">Developing this site was a big insight how complex functionality can be integrated into a website fairly easily using API's. I ran with this and used a Google text-to-speech API in my <b><u><a className="clickable-element" href="https://learn-french-vocabulary-7c5e012473d2.herokuapp.com" target="_blank" rel="noopener noreferrer">French<HyperlinkLogo/></a></u></b> and <b><u><a className="clickable-element underline" href="https://learn-german-vocab-2033eb22798e.herokuapp.com/" target="_blank" rel="noopener noreferrer">German<HyperlinkLogo/></a></u></b> websites to provide pronunciation of the words being learned. This website also <span>gave me fullstack developer experience as I integrated a front end, server and database into the site.</span></p>
                </div>
            </div>
        </div>

        <div className="beforeWebDev">
            <h2><b>Before Web Development</b></h2>
            <p>I previously studied and worked as a <span>Mechanical Engineer</span> so <span>I have extensive experience of problem solving as well as developing and testing technologies.</span> With the world seemingly moving into a new age of digital technology I am fully focused on learning about this space and bringing my skills and creativity to it. <span>I have spent the last two years developing my coding skills specifically in terms of front end web design.</span></p>
        </div>

        
        <div className="otherprojects-container">
            {/* <h1><b>Other Coding Projects</b></h1> */}
            <div className="otherprojects-container2">
                <h1 className="move-animation-right"><b>Other Projects</b></h1>
                <p className="move-animation-right">---------</p>
                <h2 className="move-animation-right"><b>Python Blockchain System</b></h2>
                <p className="move-animation-right">This project was completed as part of an Udemy course.</p>
                <div className="otherprojects-container3">
                    {/* <p><iframe src="https://www.youtube.com/embed/ryyLuHmBlbk?si=EMFXYAprYrNnGcBb?autoplay=1" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></p> */}
                    <video controls> <source src="https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Videos/portfolio_python.mp4" type="video/mp4" /> Your browser does not support the video tag.</video>
                </div>
                <p className="move-animation-right">Most of the work consisted of complex programming to achieve the functionality of a blockchain system. Whilst I enjoy the technical challenge of serious coding like this I enjoyed more creating the UI of this project even though it was very simple. I realised I enjoy the mix of techical problem solving aswell as the creative elements of making a UI. <span>This is what made me realise that front end web development is what I want to do.</span></p>
                <div className='button-container move-animation-right'>
                    <button><p><b><u><a className="clickable-element" href="https://github.com/TomHolidayUK/pythonblockchain" target="_blank" rel="noopener noreferrer">Github Files<HyperlinkLogo/></a></u></b></p></button>
                </div>
                <p className="spacer-line move-animation-right">---------</p>
            </div>
            <div className="otherprojects-container2">
                <h2 className="move-animation-left"><b>Matlab Engine Analysis</b></h2>
                <p className="move-animation-left">I did this project whilst studying Mechanical Engineering at the University of Leeds. It was done using Matlab which is a programming language and environment used frequently in engineering. This was the first serious coding project I ever did and I realised how much I enjoyed the logical thinking and problem solving required to develop code.</p>
                <div className="otherprojects-container4">
                    {/* <p><iframe src="https://www.youtube.com/embed/P7Ojylpx-jE?si=aHzFyMV-Ckui90mC" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></p> */}
                    <video controls> <source src="https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Videos/portfolio-matlab.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
                </div>
                <p className="move-animation-left">I also gained an appreciation of the user benefits that a computational programme like this could bring. In the case of this programme, it made running a thermodynamic analysis of a turbofan engine a lot faster than doing the calculations by hand. This led me to create a basic UI (which was not required for the project) to make the programme even more user friendly. <span>I took great satisfaction in doing this and it was what inspired me to consider app/web development seriously.</span></p>
                <div className='button-container move-animation-left' >
                    <button><p><b><u><a className="clickable-element" href="https://github.com/TomHolidayUK/matlab_engine_analysis" target="_blank" rel="noopener noreferrer">Github Files<HyperlinkLogo/></a></u></b></p></button>
                </div>
            </div>
        </div>

 
{/* 
        <Typewriter
            options={{
                strings: ['Hello World'],
                autoStart: startTypewriter,
                // deleteAll: false
                pauseFor: 5000,
                loop: true,
            }}
        />



        <div className="typewriter-effect">
            <Typewriter  className="typewriter-effect"
            options={{
                strings: ['Hello World'],
                autoStart: startTypewriter, // Control animation start based on state
                pauseFor: 5000,
                loop: true,
            }}
            />
        </div> */}

        {/* <div className="typewriter-effect" onClick={startTyping}>
            <TypewriterEffect text="Holis flea, i hope that you are having a good day, i am just about to go on a run, see you later :)" autoStart={startTypewriter} />
        </div> */}



        <div className='experience'>
            <h2 className="typewriter-effect"><b>Professional Experience</b></h2>
            <p className="typewriter-effect">Organisations that i've worked for or with. <b>(Click on them for more details)</b>:</p>
            <ManualScroll/>
        </div>
        <div className='skills black'>
            <h2><b>Skills</b></h2>
            <ul className="styled-list">
                <p>Web Development skills:</p>
                {/* <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="Javascript, HTML and CSS skills." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="Using API’s to bring advanced functions and features to websites." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="Database development and management with PostgreSQL." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="Deployment and maintenance with Heroku." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="Developing functional servers using Postman for testing and express.js/node.js for handling routing and API’s." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="Github to store and share work." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="Working and collaborating with fellow developers on the internet via discord, Stack Overflow and Github." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="Updating skills in line with current industry trends (initially learnt React with Classes and have evolved to use Hooks)." autoStart={startTypewriter} /></li>
                </div> */}
                <li className="typewriter-effect"><span>Javascript, HTML and CSS skills</span></li>
                <li className="typewriter-effect"><span>Using API’s</span> to bring advanced functions and features to websites.</li>
                <li className="typewriter-effect">Database development and management with <span>PostgreSQL</span>.</li>
                <li className="typewriter-effect">Deployment and maintenance with Heroku.</li>
                <li className="typewriter-effect">Developing functional servers using Postman for testing and <span>express.js/node.js</span> for handling routing and API’s</li>
                <li className="typewriter-effect">Github to store and share work</li>
                <li className="typewriter-effect">Working and collaborating with fellow developers on the internet via discord, Stack Overflow and Github</li>
                <li className="typewriter-effect">Updating skills in line with current industry trends (initially learnt React with Classes and have evolved to use Hooks)</li>
            </ul>
            <p>-----</p>
            <ul className="styled-list">
                <p>Other Skills:</p>
                <li>Organisation and Team Co-ordination (see <a className="clickable-element" href="#kyrgyzstanSection"><b><u>Kyrgyzstan 2021 Expedition<HyperlinkLogo/></u></b></a>)</li>
                <li>Effective Teamworker</li>
                <li>High Level of Verbal and Written Communication Skills</li>
                <li>Technical Problem Solving</li>
                <li>Decision Making</li>
                <li>FDM 3D Printing (I am the proud owner of a Creality Ender 3 v2)</li>
                <li>MATLAB including MATLAB Simulink</li>
                <li>Industrial Standard Experience in CAD design including producing engineering drawings (Creo Parametric and Solidworks)</li>
                <li>FEA – ABAQUS</li>
                <li>CFD – Ansys Fluent</li>
                <li>Adobe Premier Pro, After Effects and Photoshop & Microsoft Office, including Excel.</li>
                <li>TESOL Qualified</li>
                <li>C1 Fluency in Spanish. Basic A2 French </li>
            </ul>
            <p>-----------------</p>
            <p>Currently i'm focused on improving all my skills related to web development. I'm learning Svelte.js and JQuery as well as trying to implement a complex database into my <a className="clickable-element" href="#frenchvocabGame"><u><b>French Vocabulary Game Website<HyperlinkLogo/></b></u></a>.</p>
            <p>-----------------</p>
            <img className="logo" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/Personal/6/Tom+Holiday-logos_white.png' alt=""></img>
        </div>
    </div>
);
}

export default WebDevelopment;


