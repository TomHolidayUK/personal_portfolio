import React from 'react';
import './Interests.css';
import AutoScroll from '../ScrollComponents/AutoScroll/AutoScroll';
import HyperlinkLogo from '../HyperlinkLogo/HyperlinkLogo';
import { useEffect } from 'react';
import gsap from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Interests = ({callhandleReadingPopupClick, isReadingPopupOpen, callhandleFilmPopupClick, isFilmPopupOpen}) => {

  const handleReadingButtonClick = () => {
    // Call the function from the parent component
    callhandleReadingPopupClick();
  };

  const handleFilmButtonClick = () => {
    // Call the function from the parent component
    callhandleFilmPopupClick();
  };

  // Highlight Text Animation
  gsap.utils.toArray("span").forEach((span) => {
    ScrollTrigger.create({
        trigger: span,
        start: "bottom 60%",
        toggleClass: "active",
    })
  })

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

    useEffect(() => {
      const itemsToAnimate = gsap.utils.toArray('.fade-animation');
      itemsToAnimate.forEach(item => {
        gsap.to(item, { 
      
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,  
            start: 'center 80%',
            end: 'center 70%',
            toggleActions: 'play none none none',
            // scrub: true,
          //   markers: true,
          }
        })
      });
      }, []);


return (
<div id="interestsSection">
  <h1>Personal Interests</h1>
  <p>When I am not coding, working or studying I love exercise and all things outdoors. In particular I like camping, running, cycling, climbing and playing and watching football. I'm also an avid film and book fan and I also like to do some personal DIY projects from time to time such as working on my car or bike or making stuff with my 3D printer.</p>
  <p>-----------------------------------------------</p>
  <div className='climbing'>
    <h1><b>Climbing</b></h1>
    <div className='img-container'>
      <img className="move-animation-left" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Climbing/9.JPG' alt="hello" loading="lazy"/>
      <img className="move-animation-right" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Climbing/11.JPG' alt="hello" loading="lazy"/>
      <img className="move-animation-left" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Climbing/8.jpg' alt="hello" loading="lazy"/>
      <img className="move-animation-right" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Climbing/12.JPEG' alt="hello" loading="lazy"/>

    </div>
    <p><b><u><a className="clickable-element underline" href="https://www.ukclimbing.com/user/profile.php?id=315064" target="_blank" rel="noopener noreferrer">UKC<HyperlinkLogo/></a></u></b></p>
  </div>
  <p>-----------------------------------------------</p>
  <div className='cycling'>
    <h1><b>Cycling</b></h1>
    <div className='img-container'>
      <img className="move-animation-left" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Cycling/1.jpg' alt="hello" loading="lazy"/>
      <img className="move-animation-right" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Cycling/2.jpg' alt="hello" loading="lazy"/>
      <img className="move-animation-left" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Cycling/3.JPG' alt="hello" loading="lazy"/>
      <img className="move-animation-right" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Cycling/4.JPG' alt="hello" loading="lazy"/>
      <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Cycling/5.jpg' alt="hello" loading="lazy"/>
    </div>
    <p><b>Favourite Rides:</b></p>
    <p>Portsmouth to Shrewsbury (2012) - 1 day - 319km</p>
    <p>Calais to Amsterdam (2019) - 5 days - 592km</p>
    <p>North Coast 500, Scotland (2020) - 6 days - 804km</p>
    <p>Dunkirk to Marseille (2020) - 7 days - 1200km</p>
    <p>Santander, Spain to Nice, France (2021) - 14 days - 1400km</p>
    <p>Lyon to Turin (2023) - 5 days - 700km</p>
    <p><b><u><a className="clickable-element underline" href="https://www.strava.com/athletes/55351253" target="_blank" rel="noopener noreferrer">Strava<HyperlinkLogo/></a></u></b></p>
  </div>
  <p>-----------------------------------------------</p>
  <div className='running'>
    <h1><b>Running</b></h1>
    <AutoScroll/>
    <p>Formerly a road runner but recently I have been enjoying trail running much more.</p>
    <p><b><u><a className="clickable-element underline" href="https://www.strava.com/athletes/55351253" target="_blank" rel="noopener noreferrer">Strava<HyperlinkLogo/></a></u></b></p>
  </div>
  <p>-----------------------------------------------</p>
  <div className='DIY'>
    <h1><b>DIY Projects</b></h1>
    <p>I also like to do small engineering projects and DIY. I utilise my personal 3D printer (Creality Ender 3) to do this.</p>
    <video controls> <source src="https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Work/1.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
    <video controls> <source src="https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Work/IMG_2455.MOV" type="video/mp4" />Your browser does not support the video tag.</video>
    <video controls> <source src="https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Work/GH019485.MP4" type="video/mp4" />Your browser does not support the video tag.</video>
    <p>I am also regularly fixing my old VW Golf Mk3 aswell as keeping my bikes in good condition. My guilty pleasure is doing a full clean of my bike.</p>
  </div>
  <p>-----------------------------------------------</p>
  <div className="reading">
    <h1><b>Reading</b></h1>
    <p>Reading is a big part of my life as it gives me an outlet to focus my mind, relax, imagine and learn new things.</p>
    <p>My favourite book is <span>‘Shantaram’ by Gregory David Roberts.</span></p>
    <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Work/IMG_66352.JPG' alt="hello" loading="lazy"/>
    <p><b className="clickable-element" onClick={handleReadingButtonClick}>See my Book List<HyperlinkLogo/></b></p>
    {isReadingPopupOpen && (
    <div className="overlay2">
      <div id="popup1" className="popup scroll">
          <h1>Books</h1>
          <h3>Read</h3>
          <ul className="styled-list">
            <li>Crime and Punishment - Dostoyevsky</li>
            <li>The Gulag Archipelego - Aleksandr Solzhenitsyn</li>
            <li>Brave New World - Aldous Huxley</li>
            <li>Capitalist Realism - Mark Fisher</li>
            <li>12 Rules for Life - Jordan Peterson</li>
            <li>Lord of the Flies - William Golding</li>
            <li>Inverting the Pyramid - Jonathan Wilson</li>
            <li>The Kite Runner - Khaled Hosseini</li>
            <li>A Thousand Splendid Suns - Khaled Hosseini</li>
            <li>And the Mountains Echoed - Khaled Hosseini</li>
            <li>Cometas en el Cielo - Khaled Hosseini</li>
            <li>The War on Normal People - Andrew Yang</li>
            <li>Animal Farm - George Orwell</li>
            <li>Sapiens - Yuval Noah Harari</li>
            <li>Homo Deus - Yuval Noah Harari</li>
            <li>21 Lessons for the 21st Century - Yuval Noah Harari</li>
            <li>The Chosen - Chaim Potok</li>
            <li>Short Stories in French (Beginner) - Olly Richards</li>
            <li>Mao (The Unkown Story) - Yung Chang + John Halliday</li>
            <li>Shantaram - Gregory David Roberts</li>
            <li>The Mountain Shadow - Gregory David Roberts</li>
            <li>Feral - George Monbiot</li>
            <li>Who Rules the World? - Noam Chomsky</li>
            <li>Harry Potter and the Philosopher’s Stone - JK Rowling</li>
            <li>Harry Potter and the Chamber of Secrets - JK Rowling</li>
            <li>Harry Potter and the Prisoner of Azkaban - JK Rowling</li>
            <li>Harry Potter and the Goblet of Fire - JK Rowling</li>
            <li>Harry Potter and the Order of the Phoenix - JK Rowling</li>
            <li>Harry Potter and the Half-Blood Prince - JK Rowling</li>
            <li>Harry Potter and the Deathly Hallows - JK Rowling</li>
            <li>Harry Potter y la Piedra Filosofal - JK Rowling</li>
            <li>Harry Potter y la Camara Secreta - JK Rowling</li>
            <li>Harry Potter y el Prisonero de Azkaban - JK Rowling</li>
            <li>Harry Potter y el Caliz de Fuego - JK Rowling</li>
            <li>Harry Potter y la Orden del Fenix - JK Rowling</li>
            <li>Harry Potter y el Misterio del Principe - JK Rowling</li>
            <li>Harry Potter y las reliquias de la Muerte - JK Rowling</li>
            <li>A Song of Ice and Fire: A Game of Thrones - George RR Martin</li>
            <li>A Song of Ice and Fire: A Clash of Kings - George RR Martin</li>
            <li>A Song of Ice and Fire: A Storm of Swords - George RR Martin</li>
            <li>A Song of Ice and Fire: A Feast for Crows - George RR Martin</li>
            <li>A Song of Ice and Fire: A Dance with Dragons - George RR Martin</li>
            <li>The Da Vinci Code - Dan Brown</li>
            <li>Angels and Demons - Dan Brown</li>
            <li>Digital Fortress - Dan Brown</li>
            <li>Inferno - Dan Brown</li>
            <li>Origen - Dan Brown</li>
            <li>The Lost Symbol - Dan Brown</li>
            <li>Deception Point - Dan Brown</li>
          </ul>
          <h3>To Read</h3>
          <ul className="styled-list">
            <li>But What Can I Do? - Alistair Campbell</li>
            <li>Politics on the Edge - Rory Stewart</li>
            <li>An AI Pioneer Unravels The Risks Of The Coming Powerful Wave Of AI And Modern Technology - Mustafa Suleyman</li>
            <li>Doughnut Economics - Kate Raworth</li>
            <li>21 lecciones para el siglo 21 - Yuval Noah Harari</li>
            <li>Anna Karenin - Leo Tolstoy</li> 
            <li>Rabia - Lesther Aleman </li>
            <li>Entangled Life - Merlín Sheldrake</li> 
            <li>False Alarm - Bjorn Lomberg </li>
            <li>The Bible</li>
            <li>Marching Powder - Rusty Young</li>
            <li>In Order to Live - Yeonmi Park</li>
            <li>Don Quixote - Cervantes </li>
            <li>Lord of the Rings - Tolkein</li>
            <li>The Girl with the Dragon Tattoo - Stieg Larson</li>
            <li>Natives - Akala</li>
            <li>Tribes - Sebastian Yunger</li>
            <li>Ask a Footballer - James Milner</li>
            <li>War and Peace - Leo Tolstoy</li>
            <li>The Book Thief - Markus Zusak</li>
            <li>Hyperspace - Michio Kaku</li>
            <li>One Day in the Life of Ivan Denisovich - Solzenhitsyn</li>
            <li>Child 44 - Tom Rob Smith</li>
            <li>Short Stories in French (Intermediate) - Olly Richards</li>
            <li>The Qur'an</li>
            <li>In Search of Lost Time - Marcel Proust</li>
            <li>Endurance - Aldred Lansing</li>
            <li>The Sixth Extinction - Elizabeth Kolbert</li>
            <li>The Places in Between - Rory Stewart </li>
            <li>Cien Anos de Soledad - Gabriel Garcia Marquez</li>
            <li>De Amor y De Sombra - Isabel Allende</li>
            <li>Wild Swans - Yung Chang</li>
            <li>La Isla de Los Hombres Solos - Jose Leon Sanchez </li>
            <li>Blockchain Revolution - Don Tapscott + Alex Tapscott</li>
            <li>Why we Sleep - Matthew Walker</li>
            <li>Catch-22 - Joseph Heller</li>
            <li>Gone Girl - Gillian Flynn</li>
            <li>The Da Vinci Code (Version Francais) - Dan Brown</li>
            <li>Freedom at Midnight - Larry Collins + Dominique Lapierre</li>
            <li>Despised - Paul Embery</li>
            <li>Fear and Loathing in Las Vegas - Hunter S Thompson </li>
            <li>It’s not about the Bike - Lance Armstrong</li>
            <li>An Idiot Abroad - Karl Pilkington </li>
            <li>La Aventura de Miguel Littin, Clandestino en Chile - Gabriel Garcia Marquez</li>
          </ul>
          <button onClick={handleReadingButtonClick}>Close</button>
      </div>
    </div>
    )}
  </div>
  <p>-----------------------------------------------</p>
  <div className='photography'>
    <h1>Photography</h1>
    <div className='img-container'>
      <img className="fade-animation" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Photography/1.JPG' alt="hello" loading="lazy"/>
      <img className="fade-animation" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Photography/3.jpeg' alt="hello" loading="lazy"/>
      <img className="fade-animation" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Photography/4.JPEG' alt="hello" loading="lazy"/>
      <img className="fade-animation" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Photography/5.JPEG' alt="hello" loading="lazy"/>
      <img className="fade-animation" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Photography/6.JPEG' alt="hello" loading="lazy"/>
      <img className="fade-animation" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Photography/9.JPEG' alt="hello" loading="lazy"/>
      <img className="fade-animation" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Photography/7.jpg' alt="hello" loading="lazy"/>
      <img className="fade-animation" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Photography/8.JPEG' alt="hello" loading="lazy"/>
    </div>
    <img className="solo fade-animation" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Photography/2.JPEG' alt="hello" loading="lazy"/>
    <p><b><u><a className="clickable-element underline" href="https:/instagram.com/tomholiday?igshid=MzMyNGUyNmU2YQ==" target="_blank" rel="noopener noreferrer">Instagram<HyperlinkLogo/></a></u></b></p>
  </div>
  <p>-----------------------------------------------</p>
  <div className='adventure'>
  <h1>Adventure</h1>
  <div className='img-container'>
    <img className="move-animation-left" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Travelling/1.jpg' alt="hello" loading="lazy"/>
    <img className="move-animation-right" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Travelling/2.JPG' alt="hello" loading="lazy"/>
    <img className="move-animation-left" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Travelling/3.JPG' alt="hello" loading="lazy"/>
    <img className="move-animation-right" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Travelling/4.JPG' alt="hello" loading="lazy"/>
    {/* <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Travelling/5.JPG' alt="hello" loading="lazy"/> */}
    <img className="move-animation-left" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Travelling/6.JPG' alt="hello" loading="lazy"/>
    <img className="move-animation-right" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Travelling/7.jpg' alt="hello" loading="lazy"/>
    <img className="move-animation-left" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Travelling/8.jpg' alt="hello" loading="lazy"/>
    <img className="move-animation-right" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Travelling/9.JPG' alt="hello" loading="lazy"/>
    <img className="move-animation-left" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Other/4.JPEG' alt="hello" loading="lazy"/>
    <img className="move-animation-right" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Other/5.JPG' alt="hello" loading="lazy"/>
    </div>
  </div>
  <p>-----------------------------------------------</p>
  <div className="film">
    <h1>Film and Video</h1>
    <p>I have always loved films. I think the combination of imagery, music and dialogue can be a beautiful way to tell stories and evoke emotion in the viewer. I've tried to achieve this myself in the few videos I have made on my Youtube channel. I really enjoy this creative process and I think this is part of the reason why I enjoy making websites too.</p>
    <p>(<b className="clickable-element" onClick={handleFilmButtonClick}>My favourite films<HyperlinkLogo/></b>)</p>
    {isFilmPopupOpen && (
    <div className="overlay2">
      <div className="popup">
          <h1>Favourite Films</h1>
          <ul className="styled-list">
            <li>The Shawshank Redemption</li>
            <li>Seven</li>
            <li>Dunkirk</li>
            <li>Parasite</li>
            <li>Forest Gump</li>
          </ul>
          <button onClick={handleFilmButtonClick}>Close</button>
      </div>
    </div>
    )}
  </div>
  <p>This is a video I made by combining clips of my favourite films into a music video:</p>
  <div className="iframe-container">
    <iframe src="https://www.youtube.com/embed/my3ghkgrPfo?si=OvjpYVxK42dHYS1s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  </div>
</div>
);
}

export default Interests;

