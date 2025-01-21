import React from 'react';
import './SupposedToBeHard.css';


const SupposedToBeHard = () => {

return (
    <div className="introSection3">
        <div id="SupposedToBeHardSection">
            <h1><b>It's Supposed To Be Hard</b></h1>
            <p>2024 was a busy year. From starting a new job at <b>Guralp Systems</b>, to completing the legendary 
            <a className="clickable-element" href="http://bobgrahamclub.org.uk/" target="_blank" rel="noopener noreferrer"> Bob Graham Round </a>
            in 27 hours. However, a highlight for me was making a short film <b>'It's Supposed To Be Hard'.</b></p>
            <p>The film follows my friend Will in his conquest to complete the legendary 100 mile race 'The Arc of Attrition' in Cornwall. The film looks to capture the beauty of Cornwall contrasted with the barbarism of the Arc as well as including perosnal stories and emotional moments.</p>
            <div className="iframe-container">
                <p><iframe width="560" height="315" src="https://www.youtube.com/embed/yNad6mt3Iu4?si=cNVO7HupoBSs01ht" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
            </div>   
        </div>
    </div>
);
}

export default SupposedToBeHard;
