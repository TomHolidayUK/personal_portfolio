import React from 'react';
import './Software.css';
import AutoScroll2 from '../ScrollComponents/AutoScroll2/AutoScroll2'; 
import HyperlinkLogo from '../HyperlinkLogo/HyperlinkLogo';
import { useEffect, useState } from 'react';
import gsap from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from 'typewriter-effect';
gsap.registerPlugin(ScrollTrigger);

const Software = () => {

// // Highlight Text Animation
// gsap.utils.toArray("span").forEach((span) => {
//     ScrollTrigger.create({
//         trigger: span,
//         start: "bottom 70%",
//         toggleClass: "active",
//         // markers: true
//     })
//   })


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
              deleteSpeed: 25,
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
    // gsap.utils.toArray("TypewriterEffect").forEach((TypewriterEffect) => {
    // const itemsToAnimate = gsap.utils.toArray('.typewriter-effect');
    // itemsToAnimate.forEach(item => {
    ScrollTrigger.create({
        // trigger: TypewriterEffect,
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
        <div id="SoftwareSection">
                    <div className="website-container">
                        <div className="website-container2 " >
                            <div className="fade-animation" style={{ fontSize: '30px', fontWeight: 'bold' }}>
                                <Typewriter  
                                    options={{
                                        strings: ['Software'],
                                        autoStart: startTypewriter, 
                                        pauseFor: 2000,
                                        loop: true,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="typewriter-effect fade-animation" style={{ fontSize: '25px', fontWeight: 'bold' }} onClick={startTyping}>
                        <TypewriterEffect text="French Vocabulary Game Website" autoStart={startTypewriter} />
                    </div>
                    {/* <h2 className="fade-animation" id="frenchvocabGame"><b>French Vocabulary Game Website</b></h2> */}
                    <p className="fade-animation">In 2023 I wanted to make a game to help me and others learn French vocabulary in a fun way. From my experiences learning Spanish and teaching English, I have come to believe that vocabulary is the cornerstone to learning a language. With vocabulary you can begin to read, begin to understand spoken word and begin to speak and write, albeit with errors, however being able to communicate is goal. Many language learning apps get hung up on grammar and so <b><u><a className="clickable-element underline" href="https://learnfrenchvocab.co.uk/" target="_blank" rel="noopener noreferrer">learnfrenchvobab.co.uk<HyperlinkLogo/></a></u></b> is a simple alternative that focusses on vocab.</p>
                    <div className="website-container3 fade-animation">
                        <iframe title="French Website" src="https://learnfrenchvocab.co.uk/"></iframe>
                    </div>
                    <div className='button-container fade-animation'>
                        <button><p><b><u><a className="clickable-element" href="https://learnfrenchvocab.co.uk/" target="_blank" rel="noopener noreferrer">Visit Website<HyperlinkLogo/></a></u></b></p></button>
                        <button><p><b><u><a className="clickable-element" href="https://github.com/TomHolidayUK/French-Vocab-App" target="_blank" rel="noopener noreferrer">Github Files<HyperlinkLogo/></a></u></b></p></button>
                    </div>
                    <p className="fade-animation">Since deployment, I have found it useful for myself and received positive feedback from others. This led me to create <b><u><a className="clickable-element underline" href="https://learn-german-vocab-2033eb22798e.herokuapp.com/" target="_blank" rel="noopener noreferrer">a German version<HyperlinkLogo/></a></u></b> aswell. I am still making updates to both these versions.</p>
                </div>
                {/* <div className="website-container2 ">
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
                </div> */}

        


        {/* <Typewriter
            options={{
                strings: ['Hello World'],
                autoStart: startTypewriter,
                // deleteAll: false
                pauseFor: 5000,
                loop: true,
            }}
        /> */}



        {/* <div className="typewriter-effect">
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
            {/* <h2 className="typewriter-effect"><b>Affiliated Organisations</b></h2> */}
            {/* <ManualScroll className="manualScroll"/> */}
            <AutoScroll2 />
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
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="Organisation and Team Co-ordination." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="Effective Teamworker." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="High Level of Verbal and Written Communication Skills." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="Technical Problem Solving." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="Decision Making." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="FDM 3D Printing (I am the proud owner of a Creality Ender 3 v2)." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="MATLAB including MATLAB Simulink." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="Industrial Standard Experience in CAD design including producing engineering drawings (Creo Parametric and Solidworks)." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="FEA – ABAQUS." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="CFD – Ansys Fluent." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="Adobe Premier Pro, After Effects and Photoshop & Microsoft Office, including Excel.." autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="TESOL Qualified" autoStart={startTypewriter} /></li>
                </div>
                <div className="typewriter-effect" onClick={startTyping}>
                    <li><TypewriterEffect text="C1 Fluency in Spanish. Basic A2 French." autoStart={startTypewriter} /></li>
                </div>
                {/* <li>Organisation and Team Co-ordination (see <a className="clickable-element" href="#kyrgyzstanSection"><b><u>Kyrgyzstan 2021 Expedition<HyperlinkLogo/></u></b></a>)</li>
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
                <li>C1 Fluency in Spanish. Basic A2 French </li> */}
            </ul>
            <img className="logo" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/Personal/3/Tom+Holiday-logos_white.png' alt=""></img>
        </div>
    </div>
);
}

export default Software;


