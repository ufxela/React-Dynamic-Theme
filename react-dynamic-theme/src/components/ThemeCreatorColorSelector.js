import { CirclePicker } from 'react-color'
import React from 'react';

const ThemeCreatorColorSelector = ({setThemeColor, stepColors}) => {    
    function handleChange(color, event){
        setThemeColor(color.hex);
    }

    return ( 
        <div className="color-picker">
            <CirclePicker width={150} circleSpacing={5} circleSize={25} colors={stepColors} onChangeComplete={handleChange}/>
        </div>
     );
}
 
export default ThemeCreatorColorSelector;