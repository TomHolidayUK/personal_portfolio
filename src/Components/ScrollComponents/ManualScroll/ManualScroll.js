import React from 'react';
import './ManualScroll.css';
import { useEffect, useState } from 'react';
import HyperlinkLogo from '../../HyperlinkLogo/HyperlinkLogo';

const ManualScroll = () => {

  const [lastScrollTop, setLastScrollTop] = useState(0); 

  // Use useEffect to add the scroll event listener when the component mounts
  useEffect(() => {
    const header = document.querySelector('.scroll-navbar');
    const footer = document.querySelector('.scroll-footer');

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        // Scrolling down, hide the header and show the footer
        header.style.transform = 'translateY(-100%)';
        footer.style.transform = 'translateY(0%)';
      } else {
        // Scrolling up, show the header and hide the footer
        header.style.transform = 'translateY(0%)';
        footer.style.transform = 'translateY(100%)';
      }

      setLastScrollTop(scrollTop); // Update the last scroll position
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, [lastScrollTop]); // Use lastScrollTop as a dependency to trigger useEffect when it changes
  
  // -------------------------------------------------------------------------------------------------



  const [isMBDAPopupOpen, setIsMBDAPopupOpen] = useState(false);
  const handleMBDAButtonClick = () => {
    setIsMBDAPopupOpen(!isMBDAPopupOpen);
  };

  const [isQineticPopupOpen, setIsQineticPopupOpen] = useState(false);
  const handleQineticButtonClick = () => {
    setIsQineticPopupOpen(!isQineticPopupOpen);
  };

  const [isBlastechPopupOpen, setIsBlastechPopupOpen] = useState(false);
  const handleBlastechButtonClick = () => {
    setIsBlastechPopupOpen(!isBlastechPopupOpen);
  };

  const [isAnsysPopupOpen, setIsAnsysPopupOpen] = useState(false);
  const handleAnsysButtonClick = () => {
    setIsAnsysPopupOpen(!isAnsysPopupOpen);
  };

  const [isBAEPopupOpen, setIsBAEPopupOpen] = useState(false);
  const handleBAEButtonClick = () => {
    setIsBAEPopupOpen(!isBAEPopupOpen);
  };

  const [isDynalloyPopupOpen, setIsDynalloyPopupOpen] = useState(false);
  const handleDynalloyButtonClick = () => {
    setIsDynalloyPopupOpen(!isDynalloyPopupOpen);
  };

  const [isEBPopupOpen, setIsEBPopupOpen] = useState(false);
  const handleEBButtonClick = () => {
    setIsEBPopupOpen(!isEBPopupOpen);
  };

  const [isEFPopupOpen, setIsEFPopupOpen] = useState(false);
  const handleEFButtonClick = () => {
    setIsEFPopupOpen(!isEFPopupOpen);
  };

  const [isMissionPopupOpen, setIsMissionPopupOpen] = useState(false);
  const handleMissionButtonClick = () => {
    setIsMissionPopupOpen(!isMissionPopupOpen);
  };

  const [isPowertravellerPopupOpen, setIsPowertravellerPopupOpen] = useState(false);
  const handlePowertravellerButtonClick = () => {
    setIsPowertravellerPopupOpen(!isPowertravellerPopupOpen);
  };

  const [isSamayaPopupOpen, setIsSamayaPopupOpen] = useState(false);
  const handleSamayaButtonClick = () => {
    setIsSamayaPopupOpen(!isSamayaPopupOpen);
  };

  const [isUoSPopupOpen, setIsUoSPopupOpen] = useState(false);
  const handleUoSButtonClick = () => {
    setIsUoSPopupOpen(!isUoSPopupOpen);
  };

  const [isTorqPopupOpen, setIsTorqPopupOpen] = useState(false);
  const handleTorqButtonClick = () => {
    setIsTorqPopupOpen(!isTorqPopupOpen);
  };

  const [isRRPopupOpen, setIsRRPopupOpen] = useState(false);
  const handleRRButtonClick = () => {
    setIsRRPopupOpen(!isRRPopupOpen);
  };

  const [isCaterpillarPopupOpen, setIsCaterpillarPopupOpen] = useState(false);
  const handleCaterpillarButtonClick = () => {
    setIsCaterpillarPopupOpen(!isCaterpillarPopupOpen);
  };

  return (
    <div className='logos-container'>
      {/* <img className="slider-slide" src='./Logos/qinetiq.png' alt="Qinetic Logo"/> */}
      <div className="logos-viewport">
        <div className="slider-slide"><b className="clickable-element" onClick={handleMBDAButtonClick}><img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/mbda.png' alt="MBDA Logo"/></b></div>
        <div className="slider-slide"><b className="clickable-element" onClick={handleDynalloyButtonClick}><img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/dynalloy.png' alt="dynalloy Logo"/></b></div>
        <div className="slider-slide"><b className="clickable-element" onClick={handleQineticButtonClick}><img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/qinetiq.png' alt="Qinetic Logo"/></b></div>
        <div className="slider-slide"><b className="clickable-element" onClick={handleBlastechButtonClick}><img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/blastech.png' alt="Blastech Logo"/></b></div>
        <div className="slider-slide"><b className="clickable-element" onClick={handleAnsysButtonClick}><img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/ansys.png' alt="ansys Logo"/></b></div>
        <div className="slider-slide"><b className="clickable-element" onClick={handleBAEButtonClick}><img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/BAE.png' alt="BAE Logo"/></b></div>
        <div className="slider-slide"><b className="clickable-element" onClick={handleEBButtonClick}><img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/ellis brigham.png' alt="ellis brigham Logo"/></b></div>
        <div className="slider-slide exped"><b className="clickable-element" onClick={handleEFButtonClick}><img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/expedition foods.png' alt="expedition foods Logo" width="200" height="200"/></b></div>
        <div className="slider-slide"><b className="clickable-element" onClick={handleMissionButtonClick}><img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/mission.png' alt="mission Logo"/></b></div>
        <div className="slider-slide"><b className="clickable-element" onClick={handlePowertravellerButtonClick}><img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/powertraveller3.png' alt="powertraveller Logo"/></b></div>
        <div className="slider-slide"><b className="clickable-element" onClick={handleSamayaButtonClick}><img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/samaya.avif' alt="samaya Logo"/></b></div>
        <div className="slider-slide"><b className="clickable-element" onClick={handleUoSButtonClick}><img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/sheffield.png' alt="sheffield Logo"/></b></div>
        <div className="slider-slide"><b className="clickable-element" onClick={handleTorqButtonClick}><img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/torq.png' alt="torq Logo"/></b></div>
        <div className="slider-slide"><b className="clickable-element" onClick={handleRRButtonClick}><img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/rolls royce.png' alt="rolls royce Logo"/></b></div>
        <div className="slider-slide"><b className="clickable-element" onClick={handleCaterpillarButtonClick}><img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/caterpillar.png' alt="caterpillar Logo"/></b></div>
        
        {isMBDAPopupOpen && (
          <div className="overlay2">
            <div className="popup">
                <h2>Undergraduate Warheads Design Engineer - MBDA Systems UK, Bolton, 2018-2019 </h2>
                <p>At MBDA I successfully headed the design and trial work for a research project for an external customer which explored different fuse mounting options for increased hard target survivability in high-speed weapons. This consisted of designing an inert projectile (imitating a warhead) that could record shock data at different locations during supersonic impact with a target. My work involved: iterative design of the warhead system, liaising with various component suppliers, organising a suitable firing procedure with the trials site (run by QinetiQ) and presenting the findings of the project to the customer. I strongly feel working on this project, along with other work undertaken at MBDA, strengthened my understanding and ability to collaborate professionally with colleagues, suppliers and customers to achieve exceptional results in complex work. </p>
                <p>--------</p>
                <p><b><u><a className="clickable-element underline" href="https://drive.google.com/file/d/14-ce5NhZsx3YvTqf0FVlrDHU18rndIU-/view?usp=sharing" target="_blank" rel="noopener noreferrer">Placement Report<HyperlinkLogo/></a></u></b></p>
                <p><b><u><a className="clickable-element underline" href="https://drive.google.com/file/d/1Z_k5Bbsg4zG91djLtBJyw46tGHXYjLjZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Placement Poster<HyperlinkLogo/></a></u></b></p>
                <button onClick={handleMBDAButtonClick}>Close</button>
            </div>
          </div>
          )}

        {isQineticPopupOpen && (
          <div className="overlay2">
            <div className="popup">
                <h2>Qinetic</h2>
                <p>I worked with Qinetic whilst I was at MBDA. They were shareholders in the project that I led the design for (WSTC0114). I held regular design and progress meetings with them in the lead up to the project's trial and then debriefed them with results and conclusions afterwards.</p>
                <button onClick={handleQineticButtonClick}>Close</button>
            </div>
          </div>
          )}

        {isBlastechPopupOpen && (
          <div className="overlay2">
            <div className="popup">
                <h2>Blastech</h2>
                <p>I also worked with Blastech as part of the WSTC0114 project at MBDA. They run trial facilities which I used for the project so I had to organise the trial inline with their demands.</p>
                <button onClick={handleBlastechButtonClick}>Close</button>
            </div>
          </div>
          )}

        {isAnsysPopupOpen && (
          <div className="overlay2">
            <div className="popup">
                <h2>Ansys</h2>
                <p>Ansys kindly supported my final year Masters project at the University of Leeds by supplying use with CFD programme licenses which were used to conduct analysis on the propellors.</p>
                <button onClick={handleAnsysButtonClick}>Close</button>
            </div>
          </div>
          )}

        {isBAEPopupOpen && (
          <div className="overlay2">
            <div className="popup">
                <h2>BAE</h2>
                <p>As a sister company of MBDA, I worked closely with BAE on a few projects at MBDA, including WSTC0114 where they were stakeholders.</p>
                <button onClick={handleBAEButtonClick}>Close</button>
            </div>
          </div>
          )}

        {isDynalloyPopupOpen && (
          <div className="overlay2">
            <div className="popup">
                <h2>Dynalloy</h2>
                <p>During my Masters Years project at the University of Leeds <a className="outline clickable-element underline" href="#droneProjectSection" onClick={handleDynalloyButtonClick}><b>(see here)</b></a> I worked closely with a material called Nitinol. Nitinol is a shape memory alloy which means that it deforms back to it's 'remembered' shape when heated. During deformation it exerts a force meaning that it can be used as an actuator. During this project I explored using it as a lightweight actuator on a drone. Dynalloy is a US company who make springs of Nitinol. They took interest in the project and sponsored it by providing free samples of their springs. They were excited by the novel way in which I used the air flow off of the drone's propellors to cool the Nitinol actuator springs to improve performance.</p>
                <button onClick={handleDynalloyButtonClick}>Close</button>
            </div>
          </div>
          )}

        {isEBPopupOpen && (
          <div className="overlay2">
            <div className="popup">
                <h2>Ellis Brigham</h2>
                <p>I worked with Ellis Brigham during the <a className="outline clickable-element underline" href="#kyrgyzstanSection" onClick={handleEBButtonClick}><b>Kygyzstan 2021 Expedition</b></a> as they were one of our sponsors.</p>
                <button onClick={handleEBButtonClick}>Close</button>
            </div>
          </div>
          )}

        {isEFPopupOpen && (
          <div className="overlay2">
            <div className="popup">
                <h2>Expedition Foods</h2>
                <p>I worked with Expedition Foods during the <a className="outline clickable-element underline" href="#kyrgyzstanSection" onClick={handleEFButtonClick}><b> as they were one of our sponsors.</b></a></p>
                <button onClick={handleEFButtonClick}>Close</button>
            </div>
          </div>
          )}

        {isMissionPopupOpen && (
          <div className="overlay2">
            <div className="popup">
                <h2>Mission Teas</h2>
                <p>I worked with Mission Teas during the <a className="outline clickable-element underline" href="#kyrgyzstanSection" onClick={handleMissionButtonClick}><b> as they were one of our sponsors.</b></a></p>
                <button onClick={handleMissionButtonClick}>Close</button>
            </div>
          </div>
          )}

        {isPowertravellerPopupOpen && (
          <div className="overlay2">
            <div className="popup">
                <h2>Power Traveller</h2>
                <p>I worked with Power Traveller during the <a className="outline clickable-element underline" href="#kyrgyzstanSection" onClick={handlePowertravellerButtonClick}><b> as they were one of our sponsors.</b></a></p>
                <button onClick={handlePowertravellerButtonClick}>Close</button>
            </div>
          </div>
          )}

        {isSamayaPopupOpen && (
          <div className="overlay2">
            <div className="popup">
                <h2>Samaya</h2>
                <p>I worked with Samaya during the <a className="outline clickable-element underline" href="#kyrgyzstanSection" onClick={handleSamayaButtonClick}><b> as they were one of our sponsors.</b></a></p>
                <button onClick={handleSamayaButtonClick}>Close</button>
            </div>
          </div>
          )}

        {isUoSPopupOpen && (
          <div className="overlay2">
            <div className="popup">
                <h2>University of Sheffield</h2>
                <p>I also worked with the University of Sheffield as part of the WSTC0114 project at MBDA. Along with Blastech they run trial facilities which I used for the project so I had to organise the trial inline with their demands.</p>
                <button onClick={handleUoSButtonClick}>Close</button>
            </div>
          </div>
          )}

        {isTorqPopupOpen && (
          <div className="overlay2">
            <div className="popup">
                <h2>Torq</h2>
                <p>I worked with Torq during the <a className="outline clickable-element underline" href="#kyrgyzstanSection" onClick={handleTorqButtonClick}><b> as they were one of our sponsors.</b></a></p>
                <button onClick={handleTorqButtonClick}>Close</button>
            </div>
          </div>
          )}

        {isRRPopupOpen && (
          <div className="overlay2">
            <div className="popup">
                <h2>Rolls-Royce, Derby, Summer 2013 (1 Week Shadowing)</h2>
                <p>I worked with a team engaged in the collaborative design of a composite fan blade for the Trent XWB engine. </p>
                <button onClick={handleRRButtonClick}>Close</button>
            </div>
          </div>
          )}

        {isCaterpillarPopupOpen && (
          <div className="overlay2">
            <div className="popup">
                <h2>Caterpillar Remanufacturing Services, Shrewsbury, Summer 2013 (1 Week Shadowing)</h2>
                <p>Using CAD to design an excavator engine made from mostly recycled parts.</p>
                <button onClick={handleCaterpillarButtonClick}>Close</button>
            </div>
          </div>
          )}



      </div>
    </div>
  );
}

export default ManualScroll;






