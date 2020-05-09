import React from 'react';
import ThemeCreator from '../components/ThemeCreator';
import ThemeSelector from '../components/ThemeSelector';

const ReactDynamicTheme = () => {

    return ( 
        <div>
            <h2>Select A Theme!</h2>
            <ThemeSelector />
            <ThemeCreator />
        </div>
    );
}
 
export default ReactDynamicTheme;