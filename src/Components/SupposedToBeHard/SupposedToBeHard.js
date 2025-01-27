import React from 'react';
import './SupposedToBeHard.css';
import HyperlinkLogo from '../HyperlinkLogo/HyperlinkLogo';


const SupposedToBeHard = (callhandleFilmPopupClick, isFilmPopupOpen) => {

    // const handleFilmButtonClick = () => {
    //     // Call the function from the parent component
    //     callhandleFilmPopupClick();
    //   };

return (
    <div className="introSection3">
        <div id="filmSection">
            <h1><b>It's Supposed To Be Hard</b></h1>
            <p>2024 was a busy year. From starting a new job at <b>Guralp Systems</b>, to completing the legendary 
            <a className="clickable-element" href="http://bobgrahamclub.org.uk/" target="_blank" rel="noopener noreferrer"> Bob Graham Round </a>
            in 27 hours. However, a highlight for me was making the short film <b>'It's Supposed To Be Hard'.</b></p>
            <p>The film follows my friend, Will, in his conquest to complete the legendary 100 mile race; 'The Arc of Attrition'. The film looks to capture the beauty of the Cornish coast contrasted with the barbarism of the Arc as well as including perosnal stories and emotional moments. Check it out below.</p>
            <div className="iframe-container">
                <p><iframe width="560" height="315" src="https://www.youtube.com/embed/yNad6mt3Iu4?si=cNVO7HupoBSs01ht" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
            </div>   
        </div>
        <div className="film">
        <p>I have always loved films. I think the combination of imagery, music and dialogue can be a beautiful way to tell stories and evoke emotion in the viewer. I've tried to achieve this myself in the few videos I have made on my Youtube channel. I really enjoy this creative process and I think this is part of the reason why I enjoy making websites too.</p>
        {/* <p>(<b className="clickable-element" onClick={handleFilmButtonClick}>My favourite films<HyperlinkLogo/></b>)</p>
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
        )} */}
        <div className="iframe-container">
            <iframe src="https://www.youtube.com/embed/my3ghkgrPfo?si=OvjpYVxK42dHYS1s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    </div>
    </div>
);
}

export default SupposedToBeHard;
