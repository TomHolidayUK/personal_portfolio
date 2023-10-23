import React from 'react';
import './Education.css';
import gsap from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HyperlinkLogo from '../HyperlinkLogo/HyperlinkLogo';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    return (
    <div id="educationSection">
        <h1><b>Education</b></h1>
        <p><b>Adams’ Grammar School, Newport, Shropshire, England (2008-2016)</b></p>
        <img className="adamsImage" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/Adams.png' alt="caterpillar Logo"/>
        <p><b>A Level Results:</b></p>
        <div className="school table-container">
            <table>
                <colgroup>
                    <col className="col1"/> 
                    <col className="col2" />
                </colgroup>
                <thead>
                    <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Maths</td>
                    <td>A*</td>
                    </tr>
                    <tr>
                    <td>Further Maths</td>
                    <td>A*</td>
                    </tr>
                    <tr>
                    <td>Physics</td>
                    <td>A*</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <b><ul className="styled-list centred-list">
            <li>AS-Level Chemistry- A</li>
            <li>GCSE’s: 10 GCSE’s grades A*-C including 5 A*’s and 4 A’s</li>
            <li>Free Standing Maths Qualification (FSMQ)- Additional Maths- B</li>
        </ul>
        </b>
        <p>------------------------------</p>
        <div>
            <p><b>University of Leeds, School of Mechanical Engineering (2016-2021)</b></p>
            <p><b>MEng Mechanical Engineering with Industrial Placement</b></p> 
        </div>
        <img className="UoLImage" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/UoL.png' alt="caterpillar Logo"/>
        <li><b>(Studied under the Head of School Excellence Scholarship for outstanding A-level grades.)</b></li>
        <div className="uni table-container">
            <table>
                <thead>
                <tr>
                    <th>2nd Year Modules</th>
                    <th>Results</th>
                    <th>3rd Year Modules</th>
                    <th>Results</th>
                    <th>Masters Year Modules</th>
                    <th>Results</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Mechatronics and Measurement Systems</td>
                    <td>71%</td>
                    <td>Thermofluids 3</td>
                    <td>71%</td>
                    <td>Computational Fluid Dynamics</td>
                    <td>75%</td>
                </tr>
                <tr>
                    <td>Vibrations and Control</td>
                    <td>75%</td>
                    <td>Additive Manufacture</td>
                    <td>65%</td>
                    <td>Engineering Computational Methods</td>
                    <td>83%</td>
                </tr>
                <tr>
                    <td>Engineering Mechanics</td>
                    <td>78%</td>
                    <td>Vehicle Design & Analysis</td>
                    <td>72%</td>
                    <td>Energy Systems, Policy and Economics</td>
                    <td>71%</td>
                </tr>
                <tr>
                    <td>Economics and Management</td>
                    <td>76%</td>
                    <td>Finite Element Methods of Analysis</td>
                    <td>77%</td>
                    <td>Aerospace Structures</td>
                    <td>53%</td>
                </tr>
                <tr>
                    <td>Design and Manufacture 2</td>
                    <td>79%</td>
                    <td rowSpan="2">Individual Engineering Project (40 Credits)</td>
                    <td rowSpan="2">73%</td>
                    <td rowSpan="2">Team Project: Design and Build of Reforestation Drone</td>
                    <td rowSpan="2">76%</td>
                </tr>
                <tr>
                    <td>Thermofluids 2</td>
                    <td>69%</td>
                </tr>
                <tr>
                    <td>2nd Year Overall</td>
                    <td style={{ fontWeight: 'bold' }}>74.7%</td>
                    <td>3rd Year Overall</td>
                    <td style={{ fontWeight: 'bold' }}>71.8%</td>
                    <td>4th Year Overall</td>
                    <td style={{ fontWeight: 'bold' }}>72.3%</td>
                </tr>
                <tr>
                    <td style={{ fontWeight: 'bold' }}><span>Final Score</span></td>
                    <td colSpan="5" style={{ fontWeight: 'bold' }}><span>73.23% (First Class Honors)</span></td>
                </tr>
                </tbody>
            </table>
            {/* <div>
            <img className="logo" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/Personal/1/Tom Holiday-logos_black - Copy.png' alt="hello"/>
            </div> */}
        </div>
        <div id="droneProjectSection">
            <h2><b>Notable University Projects</b></h2>
            <p>---------</p>
            <h2><b>Masters Year: Reforestation Drone Project (2020-2021)</b></h2>
            <p>In my final year of University I was involved in a team project that made <span>an autonomous drone to disperse tree seeds</span> and encourage reforestation in areas of natural or human deforestation.</p>
            <p>My remit was to design <span>a lightweight actuator system</span> to disperse the seeds. I used <span>Nitinol - a shape memory alloy</span> - that contracts when current is run through it, for actuation. I also applied <span>the novel idea of recyling air flow from the propellers to cool the Nitinol and improve actuation performance.</span></p>
            <div className="iframe-container">
                <p><iframe width="560" height="315" src="https://www.youtube.com/embed/-t-tnROBe4w?si=2gWrw2UEKkTa9Nm4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></p>
            </div>     
            <p>US company <b>Dynalloy Inc</b> that produce Flexinol®, a brand of Nitinol, took interest in my project and ended up supporting it by providing free samples of their product in exchange for my data findings. Therefore I worked alongside them throughout the project.</p>
            <p>----------</p>
            <p><b><u><a className="clickable-element underline" href="https://drive.google.com/file/d/15QfExsLkI2iWshoQ691dDjPXE4zLIX3N/view?usp=sharing" target="_blank" rel="noopener noreferrer">Individual Report<HyperlinkLogo/></a></u></b></p>
            <p><b><u><a className="clickable-element underline" href="https://drive.google.com/file/d/1UOQrLoMoRGn7ZXckAVE6_f6xpigGFtmv/view?usp=sharing" target="_blank" rel="noopener noreferrer">Team Report<HyperlinkLogo/></a></u></b></p> 
        </div>
        <div id="grapheneProjectSection">
            <h2><b>Third Year: Exploring using Graphene as a Lubricant Additive for Wind Turbine Gearboxes (2019-2020)</b></h2>
            <p>This project theoretically and experimentally studied <span>using graphene nanoplatelets as a lubricant additive for use in wind turbine gearboxes</span>.</p>
            <div className="tribology-img">
                <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Other/Screenshot (36).png' alt="hello" loading="lazy"/>
            </div>
            <p>The study <span>demonstrated wear reduction of up to 15%</span>, demonstarating it to be a suitable and promising lubricant additive.</p>
            <p>----------</p>
            <p><b><u><a className="clickable-element underline" href="https://drive.google.com/file/d/1v2hTjiRseS1T6K4bS9qIalUhVMwn0OT2/view?usp=sharing" target="_blank" rel="noopener noreferrer">Project Report<HyperlinkLogo/></a></u></b></p>
            <p><b><u><a className="clickable-element underline" href="https://docs.google.com/presentation/d/1oN9F7NyedXFn5QxdJCxQEhDnNAYGuzOb/edit?usp=sharing&ouid=114402109307210645151&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Project Presentation<HyperlinkLogo/></a></u></b></p> 
        </div>
        <div id="placementYearSection">
            <h2><b>MBDA Placement Year (2018-2019)</b></h2>
            <p>During my University degree I spent a year at Missile Manufacturer MBDA <span>as a Junior Design Engineer</span>. Whilst I soon realised that working in the defence industry wasn't for me, <span>I learnt a lot from this year in terms of working in a professional environment</span> as it was my first real work experience.</p>
            <div className="mbda-img">
                <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Other/Screenshot (38).png' alt="hello" loading="lazy"/>
            </div>
            <p>Luckily, I was given big responsabilities whilst I was there, such as <span>heading the design and trial work for a high budget research project for an external customer</span> which involved firing an inert test missile and collecting data from it.</p>
            <div className="mbda-img2">
                <img src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/iCloudPhotos/Other/Screenshot (39).png' alt="hello" loading="lazy"/>
            </div>
            <p>I strongly feel working on this project, along with other work undertaken at MBDA <span>improved my design and engineering skills, my ability to work under pressure and tight deadlines, liaising with suppliers and shareholders and presenting in meetings</span>.</p>
            <p><b><u><a className="clickable-element underline" href="https://drive.google.com/file/d/14-ce5NhZsx3YvTqf0FVlrDHU18rndIU-/view?usp=sharing" target="_blank" rel="noopener noreferrer">Placement Report<HyperlinkLogo/></a></u></b></p>
            <p><b><u><a className="clickable-element underline" href="https://drive.google.com/file/d/1Z_k5Bbsg4zG91djLtBJyw46tGHXYjLjZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Placement Poster<HyperlinkLogo/></a></u></b></p> 
        </div>
        <div id="learningSection" className="black">
            <h2><b>Independent Learning</b></h2>
            <p>The last few years I have spent a lot of time self-learning different things from Javascript and React to Spanish to 3D printing to video editing to how to replace parts on my 2003 VW Golf. I am naturally curious and self-learning is something I have grown to love in recent years and is now a huge part of my life.</p> 
            <p><span>I think this will serve me well in the tech industry as it is constantly and rapidly evolving</span>. Below I attach a few relevant things I have learnt recently:</p>
            <ul className="styled-list">
                <li>Udemy course: Python the Practical Guide.  <a className="clickable-element" href="https://www.udemy.com/share/101WLW3@tyz4bh93eRX6XCjO3cK6xAdp8jAwBOpwWbeSGIJe7GnOL60jC9vc824wyWqKc6Ogkw==/">(<u><b>link<HyperlinkLogo/>)</b></u></a></li>
                <li>Udemy course: The Complete Web Developer in 2023: Zero to Mastery. <a className="clickable-element" href="https://www.udemy.com/share/101WLW3@tyz4bh93eRX6XCjO3cK6xAdp8jAwBOpwWbeSGIJe7GnOL60jC9vc824wyWqKc6Ogkw==/">(<u><b>link<HyperlinkLogo/>)</b></u></a></li>
                <li>Udemy course: 100 Days of Code: The Complete Python Pro Bootcamp for 2023. <a className="clickable-element" href="https://www.udemy.com/share/103J8C3@YiZmRzKoUvwM37A1XgrqBU2-qG_EyH00OKY7j1hn51_SgIdEsMR-VFAYzFe2YZzr0Q==/">(<u><b>link<HyperlinkLogo/>)</b></u></a></li>
                <li>Udemy course: Svelte.js - The Complete Guide <a className="clickable-element" href="https://www.udemy.com/share/1027v43@kLeBTNhLRTGnDGEX9ibeUWIIKt-SxiubT3EJNqcRWODQ6VWH8SyOxTbgq0sMGs2JCg==/">(<u><b>link<HyperlinkLogo/>)</b></u></a></li>
                <li>Keeping up to date with recent AI developments.</li>
                <li>I have learnt Spanish to a high level of fluency. I am now learning French and hope to learn Arabic in the future. </li>
                <li>3D printing</li>
            </ul>
            <img className="logo" src='https://tomholidaymyportfoliobucket.s3.eu-west-2.amazonaws.com/public/Logos/Personal/3/Tom Holiday-logos_white.png' alt="hello"/>
        </div>
    </div>
    );
    }

export default Education;


