import React, { useContext } from 'react';

import {Helmet} from 'react-helmet';
import { ThemeContext } from '../contexts/ThemeContext';

const transition_time = '.3s';

const Head = () => {
    const { theme } = useContext(ThemeContext);
    
    const css = `
body {
    background-color: ${theme.bg};
    transition: background-color ${transition_time} ease;
    width: 90%;
    max-width: 1200px;
    margin: auto;
    font-family:Calibri, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}    

p {
    margin-bottom: 0px;
    margin-top: 0px;
    color: ${theme.syntax};
    transition: color ${transition_time} ease;
}

h2 {
    color: ${theme.syntax};
    transition: color ${transition_time} ease;
}

a {
    color: ${theme.syntax};
    transition: color ${transition_time} ease;
}

a:hover{
    color: ${theme.accent};
}

a:active{
    color: ${theme.ui};
}

.rdt-name {
    color: ${theme.header};
    text-align: left;
    margin-left: 5%;
}

.color-picker {
    display: table;
    padding: 5px;
    margin: auto; 
    border-radius: 5px;
    background-color: ${theme.ui};
    transition: background-color ${transition_time} ease;
}

.UI-button {
    display: table;
    width: auto;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: ${theme.ui};
    transition: background-color ${transition_time} ease;
}

.UI-button.icon {
    padding-bottom: 1px;
    padding-left: 5px;
    padding-right: 5px;
}

.UI-button.theme-creator-button {
    display: table;
    border-radius: 5px;
    padding-bottom: 1px;
    background-color: ${theme.ui};
    transition: background-color ${transition_time} ease;
    height: 59px;
    margin-bottom: 0px;
    position: relative;
}

.NavBar {
    border:1px solid ${theme.ui};
    transition: border ${transition_time} ease;
    border-width:2px 0;
    list-style:none;
    margin:0;
    padding:0;
    text-align:center;
}

.material-icons.color {
    color: ${theme.syntax};
    transition: color ${transition_time} ease;
}
    `;
    
    return ( 
        <Helmet>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <style>
                {css}
            </style>
        </Helmet>
    );
}
 
export default Head;