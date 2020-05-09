import React from 'react';

const ThemeCreatorButton = ({children, onClick}) => {
    return ( 
        <div className="theme-creator-button UI-button" onClick={onClick}>
            <div className="vertical-center-icon">
                {children} 
            </div>
        </div>
     );
}
 
export default ThemeCreatorButton;