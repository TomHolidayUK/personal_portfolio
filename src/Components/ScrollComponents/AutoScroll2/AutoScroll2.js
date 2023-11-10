import React from 'react';
import './AutoScroll2.css';
import { useEffect, useState, useRef } from 'react';
// import HyperlinkLogo from '../../HyperlinkLogo/HyperlinkLogo';
import gsap from 'gsap';


const AutoScroll2 = () => {

// AUTOMATIC SCROLL

const scrollerRef = useRef(null);

useEffect(() => {
    const scroller = scrollerRef.current;

    const scrollWidth = scroller.scrollWidth;
    const viewportWidth = scroller.clientWidth;

    const scrollDistance = scrollWidth - viewportWidth;

    const scrollDuration = 50; 

    const scrollAnimation = gsap.to(scroller, {
    x: -scrollDistance,
    duration: scrollDuration,
    ease: 'linear',
    repeat: -1, 
    yoyo: true,
    });

    return () => {
    scrollAnimation.kill();
    };
}, []);

// --------------------------------------------------------   

// CONTROLLING POPUPS

const statesArray = Array.from({ length: 15 }, () => false);
const [allStates, setAllStates] = useState(statesArray);

  const handleButtonClick = (id) => {
    setAllStates(() =>
        statesArray.map((_, index) => index === id)
      );
  };
   

const itemData = [
{
    title: 'Ellis Brigham',
    description: 'I worked with Ellis Brigham during <a class="outline clickable-element underline" href="#kyrgyzstanSection"><b> the Kygyzstan 2021 Expedition</b></a> as they were one of our sponsors.',
    imgSrc: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/ellis brigham.png',
},
{
    title: 'Samaya',
    description: 'I worked with Samaya during <a class="clickable-element underline" href="#kyrgyzstanSection"><b>the Kygyzstan 2021 Expedition</b></a> as they were one of our sponsors.',
    imgSrc: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/samaya.avif',
},
{
    title: 'Torq',
    description: 'I worked with Torq during <a class="outline clickable-element underline" href="#kyrgyzstanSection"><b> the Kygyzstan 2021 Expedition</b></a> as they were one of our sponsors.',
    imgSrc: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/torq.png'
},
{
    title: 'Caterpillar Remanufacturing Services, Shrewsbury, Summer 2013 (1 Week Shadowing)',
    description: 'Using CAD to design an excavator engine made from mostly recycled parts.',
    imgSrc: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/caterpillar.png'
},
{
    title: 'University of Sheffield',
    description: 'I also worked with the University of Sheffield as part of the WSTC0114 project at MBDA. Along with Blastech they run trial facilities which I used for the project so I had to organise the trial inline with their demands.',
    imgSrc: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/sheffield.png'
},
{
    title: 'BAE',
    description: 'As a sister company of MBDA, I worked closely with BAE on a few projects at MBDA, including WSTC0114 where they were stakeholders.',
    imgSrc: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/BAE.png'
},
{
    title: 'Undergraduate Warheads Design Engineer - MBDA Systems UK, Bolton, 2018-2019',
    description: 'At MBDA I successfully headed the design and trial work for a research project for an external customer which explored different fuse mounting options for increased hard target survivability in high-speed weapons. This consisted of designing an inert projectile (imitating a warhead) that could record shock data at different locations during supersonic impact with a target. My work involved: iterative design of the warhead system, liaising with various component suppliers, organising a suitable firing procedure with the trials site (run by QinetiQ) and presenting the findings of the project to the customer. I strongly feel working on this project, along with other work undertaken at MBDA, strengthened my understanding and ability to collaborate professionally with colleagues, suppliers and customers to achieve exceptional results in complex work.<br><p>--------</p><br><p>See more: <b><u><a class="clickable-element underline" href="https://drive.google.com/file/d/14-ce5NhZsx3YvTqf0FVlrDHU18rndIU-/view?usp=sharing" target="_blank" rel="noopener noreferrer">Placement Report<HyperlinkLogo/></a></u></b></p><br><p>See more: <b><u><a class="clickable-element underline" href="https://drive.google.com/file/d/1Z_k5Bbsg4zG91djLtBJyw46tGHXYjLjZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Placement Poster<HyperlinkLogo/></a></u></b></p> ',
    imgSrc: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/mbda.png'
},
{
    title: 'Dynalloy',
    description: "During my Masters Years project at the University of Leeds <a class='outline clickable-element underline' href='#droneProjectSection'><b>(see here)</b></a> I worked closely with a material called Nitinol. Nitinol is a shape memory alloy which means that it deforms back to it's 'remembered' shape when heated. During deformation it exerts a force meaning that it can be used as an actuator. During this project I explored using it as a lightweight actuator on a drone. Dynalloy is a US company who make springs of Nitinol. They took interest in the project and sponsored it by providing free samples of their springs. They were excited by the novel way in which I used the air flow off of the drone's propellors to cool the Nitinol actuator springs to improve performance.",
    imgSrc: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/dynalloy.png'
},
{
    title: 'Qinetic',
    description: "I worked with Qinetic whilst I was at MBDA. They were shareholders in the project that I led the design for (WSTC0114). I held regular design and progress meetings with them in the lead up to the project's trial and then debriefed them with results and conclusions afterwards.",
    imgSrc: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/qinetiq.png'
},
{
    title: 'Blastech',
    description: 'I also worked with Blastech as part of the WSTC0114 project at MBDA. They run trial facilities which I used for the project so I had to organise the trial inline with their demands.',
    imgSrc: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/blastech.png'
},
{
    title: 'Ansys',
    description: 'Ansys kindly supported my final year Masters project at the University of Leeds by supplying use with CFD programme licenses which were used to conduct analysis on the propellors.',
    imgSrc: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/ansys.png'
},
{
    title: 'Rolls-Royce, Derby, Summer 2013 (1 Week Shadowing)',
    description: 'I worked with a team engaged in the collaborative design of a composite fan blade for the Trent XWB engine.',
    imgSrc: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/rolls royce.png'
},
{
    title: 'Mission',
    description: 'I worked with Mission (a performance Tea producer) during <a class="outline clickable-element underline" href="#kyrgyzstanSection"><b> the Kygyzstan 2021 Expedition</b></a> as they were one of our sponsors.',
    imgSrc: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/mission.png'
},
{
    title: 'Power Traveller',
    description: 'I worked with Power Traveller during <a class="outline clickable-element underline" href="#kyrgyzstanSection"><b> the Kygyzstan 2021 Expedition</b></a> as they were one of our sponsors.',
    imgSrc: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/powertraveller3.png'
},
// {
//     title: 'Expedition Foods',
//     description: 'I worked with Expedition Foods during <a class="outline clickable-element underline exped" href="#kyrgyzstanSection"><b> the Kygyzstan 2021 Expedition</b></a> as they were one of our sponsors.',
//     imgSrc: 'https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/expedition foods.png'
// },
];

const popUps = itemData.map((item, index) => (
    allStates[index] && (
      <div className="overlay2" key={index}>
        <div className="popup">
          <h2>{item.title}</h2>
          {/* <p>{item.description}</p> */}
          <p onClick={() => setAllStates(false)} dangerouslySetInnerHTML={{ __html: item.description }} />
          <button onClick={() => setAllStates(false)}>Close</button>
        </div>. 
      </div>
    )
  ));
  
  const companyLogos = itemData.map((item, index) => (
    <div className="slider-slide" key={index}>
      <b className="clickable-element" onClick={() => handleButtonClick(index)}>
        <img src={item.imgSrc} alt={`${item.name} Logo`} />
      </b>
    </div>
  ));

  return (
    <div>
        <div>{popUps}</div>
        <div className='scroller-container' ref={scrollerRef}>
            <div className="content">{companyLogos}{companyLogos}{companyLogos}</div>
        </div>
    </div>
  );
}

export default AutoScroll2;






