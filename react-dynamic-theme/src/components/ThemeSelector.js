import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import ThemeSelectorDisplayCard from './ThemeSelectorDisplayCard';
import { generateThemeID } from '../actions/helpers';

const ThemeSelector = () => {
  const { themeID, themes, toggleTheme } = useContext(ThemeContext);

  function handleChange(newID){
    toggleTheme(newID);
  }
  
  let themeOptions = themes.map(function(themeOption) {
    const themeOptionID = generateThemeID(themeOption);
    return (
      <label key={themeOptionID}>
        <ThemeSelectorDisplayCard cardTheme={themeOption} checked={themeOptionID === themeID} onClick={handleChange}/>
      </label>
    );
  });

  return ( 
    <form>
      <label>
        <div className='themes-display-case'>
          {themeOptions}
        </div>
      </label>
    </form>
  );
};
 
export default ThemeSelector;