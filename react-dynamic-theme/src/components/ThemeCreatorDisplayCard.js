import React, { useContext, useState } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import ThemeDisplayCardBasic from './ThemeDisplayCardBasic';

const ThemeCreatorDisplayCard = ({cardTheme}) => {
    const [checked, setChecked] = useState(false);
    const { addTheme, removeTempTheme } = useContext(ThemeContext);
    
    const themeOptionStyle = {
        backgroundColor: cardTheme.bg,
        boxShadow: checked ? '0 0 5px 4px #ACCEF7' : 'none',
        border: `5px solid ${cardTheme.accent}`,
        borderRadius: '5px',
    };

    function addTempThemeLocal(){
        addTheme(cardTheme, false); 
    }

    function removeTempThemeLocal(){
        setChecked(false);
        removeTempTheme();
    }

    function setTempTheme(){
        setChecked(true);
        addTempThemeLocal();
    }

    
    return ( 
        <div className="center">
            <div className='theme-card' style={themeOptionStyle} onMouseDown={setTempTheme} onMouseUp={removeTempThemeLocal}>
                <ThemeDisplayCardBasic cardTheme={cardTheme} />
            </div>
        </div>

    );
}
 
export default ThemeCreatorDisplayCard;