import React, { createContext, useEffect, useState } from 'react';

import { generateThemeID } from '../actions/helpers';
import { v4 as uuidv4 } from 'uuid';

export const ThemeContext = createContext();

let themesData = [
  { 
    name: 'light',
    show: true,
    id: 'syntax:#555-ui:#ddd-bg:#eee-header:#eee-',
    theme: {
      syntax: '#555', 
      ui: '#ddd', 
      bg: '#eee',
      header: '#555',
      accent: '#fff'
    }
  },
  { 
    name: 'dark',
    show: true,
    id: 'syntax:#ddd-ui:#333-bg:#555-header:#555-',
    theme: {
      syntax: '#ddd', 
      ui: '#333', 
      bg: '#555',
      header: '#ddd',
      accent: '#fff'
    }
  },
  { 
    name: 'colored',
    show: true,
    id: 'syntax:#555-ui:#ddd-bg:#eee-header:#eee-',
    theme: {
      syntax: '#000', 
      ui: '#f1efea', 
      bg: '#fff',
      header: '#e81c23',
      accent: '#e81c23'
    }
  },
];

const tempThemeID = 'temporary';

const localStorageThemeIDKey = 'themeID';
const localStorageThemesDataKey = 'themesData';

const stepsColors = [
    ['#000000', '#454545', '#8a8a8a', '#b8b8b8', '#ffffff', '#780800', '#a63232','#ffd9c7','#caf0fa','#0a6078'],
    ['#D9E3F0', '#e8d5d3', '#697689', '#cffcec', '#eccffc', '#2f42a1', '#a14335','#997d00','#0046a8','#7c8700'],
    ['#D9E3F0', '#e6e8ca', '#e8d8d3', '#d3e7e8', '#ffffff', '#000000', '#7d313c','#005859','#d7cfe8','#555559'],
    ['#f5763b', '#ffffff', '#000000', '#367a54', '#3a92ab', '#8a4ac7', '#b52ba3','#e0e391','#eb953f','#aa61c9'],
    ['#f5763b', '#ffffff', '#000000', '#367a54', '#3a92ab', '#8a4ac7', '#b52ba3','#e0e391','#eb953f','#aa61c9'],
];

const ThemeContextProvider = ({children}) => {
  const [themeID, setThemeID] = useState(themesData[0].id);
  const [savedThemeID, setSavedThemeID] = useState();

  function toggleTheme(tid){
    if(themesData.find(function(themeData){
      return themeData.id === tid;
    })){
      setThemeID(tid);
      localStorage.setItem(localStorageThemeIDKey, tid);
    }
  }

  function addTheme(newTheme, show = true){
    const newThemeID = generateThemeID(newTheme);
    if(!show || !themesData.find(function(theme){ 
      return theme.id === newThemeID
    })){
      let newThemeData = {
        name: uuidv4(),
        show: show,
        id: show ? newThemeID : tempThemeID,
        theme: newTheme
      };
      themesData.push(newThemeData);
    }
    
    if(show){
      setThemeID(newThemeID);
      localStorage.setItem(localStorageThemesDataKey, JSON.stringify(themesData));
    }else{
      setSavedThemeID(themeID);
      setThemeID(tempThemeID);
    }
  }

  function removeTempTheme(){
    const index = themesData.findIndex(function(theme){
      return theme.id === tempThemeID;
    });
    if(index){
      themesData.splice(index, 1);
      setThemeID(savedThemeID);
    }
  }

  useEffect(function(){
    themesData.forEach(function(themeData){
      themeData.id = generateThemeID(themeData.theme);
    });

    const localStorageThemesData = localStorage.getItem(localStorageThemesDataKey);
    if(localStorageThemesData){
      const potentialThemesData = JSON.parse(localStorageThemesData);
      if(potentialThemesData && potentialThemesData[0] && potentialThemesData[0].id === themesData[0].id){
        themesData = potentialThemesData;
        themesData.forEach(function(themeData){
          themeData.id = generateThemeID(themeData.theme);
        });
      }
    }
    
    const localStorageThemeID = localStorage.getItem(localStorageThemeIDKey);
    if(localStorageThemeID){
      if(themesData.find(function(themeData){
        return themeData.id === localStorageThemeID;
      })){
        setThemeID(localStorageThemeID);
      }
    }
  }, []);

  let themeData = themesData.find(function (themeData) {
    return themeData.id === themeID;
  });
  if(!themeData){
    themeData = themesData[0];
  }
  const theme = themeData.theme;
  const themes = themesData.filter(function(themeData){
    return themeData.show
  }).map(function (themeData){
    return themeData.theme;
  });

  return ( 
    <ThemeContext.Provider value={{themeID, theme, themes, stepsColors, toggleTheme, addTheme, removeTempTheme}}>
      {children}
    </ThemeContext.Provider>
   );
}
 
export default ThemeContextProvider;