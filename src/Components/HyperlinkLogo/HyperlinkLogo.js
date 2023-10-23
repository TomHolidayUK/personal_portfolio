import React from 'react';
import './HyperlinkLogo.css';


function HyperlinkLogo() {
   

  return (
    <svg className="hyperlink-logo clickable-element" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M12 0v5h11.5l-5 5H0v22h22V17.5l-2 2V30H2V12h14.5l-7.8 7.7 3.6 3.6L27 8.5V20h5V0H12z"></path>
    </svg>
  );
}

export default HyperlinkLogo;
