import React from 'react';
import ThemeDisplayCardBasic from './ThemeDisplayCardBasic';
import { generateThemeID } from '../actions/helpers';

const ThemeSelectorDisplayCard = ({cardTheme, checked, onClick}) => {
    const themeOptionStyle = {
        backgroundColor: cardTheme.bg,
        boxShadow: checked ? '0 0 5px 4px #ACCEF7' : 'none',
        border: `5px solid ${cardTheme.accent}`,
        borderRadius: '5px',
    };

    
    function selected(){
        onClick(generateThemeID(cardTheme)); 
    }

    return ( 
        <div className='theme-card' style={themeOptionStyle} onClick={selected}>
            <ThemeDisplayCardBasic cardTheme={cardTheme} />
        </div>
    );
}
 
export default ThemeSelectorDisplayCard;