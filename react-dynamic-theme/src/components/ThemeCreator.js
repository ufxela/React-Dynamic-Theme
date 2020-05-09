import React, { useContext, useState } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import ThemeCreatorButton from './ThemeCreatorButton';
import ThemeCreatorColorSelector from './ThemeCreatorColorSelector';
import ThemeCreatorDisplayCard from './ThemeCreatorDisplayCard';
import { isVowel } from '../actions/helpers';

const ThemeCreator = () => {
    const { theme, stepsColors, addTheme } = useContext(ThemeContext);
    let defaultTheme = Object.assign({}, theme);

    const [creatingNewTheme, setCreatingNewTheme] = useState(false);
    const [newTheme, setNewTheme] = useState(defaultTheme);
    
    const [stepIndex, setStepIndex] = useState(0);

    const stepNames = Object.keys(theme);
    const numSteps = stepNames.length;

    function onCreateNewThemeClick(){
        setCreatingNewTheme(true);
    }
    
    function setThemeColor(color){
        const stepName = stepNames[stepIndex];
        let updatedTheme = Object.assign({}, newTheme);
        updatedTheme[stepName] = color;
        setNewTheme(updatedTheme);
    }

    function reset(){
        setCreatingNewTheme(false);
        setStepIndex(0);
        setNewTheme(defaultTheme);
    }

    function saveNewTheme(){        
        addTheme(newTheme);
        reset();
    }

    function goToNextStep(){
        setStepIndex(stepIndex + 1);
    }

    function goToPrevStep(){
        setStepIndex(stepIndex - 1);
    }

    function rightThemeCreatorButtonClick(){
        if(stepIndex === numSteps){
            saveNewTheme();
        }else{
            goToNextStep();
        }
    }

    function leftThemeCreatorButtonClick(){
        if(stepIndex === 0 || stepIndex === numSteps){
            reset();
        }else{
            goToPrevStep();
        }
    }

    const inactive = (
        <div className='center UI-button icon' onClick={onCreateNewThemeClick}>
            <i className="material-icons color">add</i>
        </div>
    );

    const active = (
        <div className='container-row'>
            <div className='container-row-elmt'>
                <ThemeCreatorButton onClick={leftThemeCreatorButtonClick}>
                    {(stepIndex === 0 || stepIndex === numSteps) ?
                        <i className="material-icons color">close</i>
                        :
                        <i className="material-icons color">keyboard_arrow_left</i>
                        }
                </ThemeCreatorButton>
            </div>
            <div className='container-row-elmt'>
                <div>
                    {stepIndex < numSteps &&
                        <p style={{ marginBottom: '5px' }}>Chose {isVowel(stepNames[stepIndex].charAt(0)) ? 'an' : 'a'} <span style={{color: newTheme[stepNames[stepIndex]]}}>{stepNames[stepIndex]}</span> color</p>
                    }
                    <div className='vertical-margin-grouped container-row'>
                    {stepIndex < numSteps &&
                        <div className='horizontal-margin-grouped container-row-elmt'>
                            <ThemeCreatorColorSelector setThemeColor={setThemeColor} stepColors={stepsColors[stepIndex]}/>
                        </div>
                    }
                        <div className='horizontal-margin-grouped container-row-elmt'>
                            <ThemeCreatorDisplayCard cardTheme={newTheme}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-row-elmt'>
                <ThemeCreatorButton onClick={rightThemeCreatorButtonClick}>
                    {stepIndex !== numSteps ?
                        <i className="material-icons color">keyboard_arrow_right</i>
                        :
                        <i className="material-icons color">check</i>
                        }
                </ThemeCreatorButton>            
            </div>
        </div>
    );

    return ( 
        <div>
            {creatingNewTheme ? active : inactive}
        </div>
    );
}
 
export default ThemeCreator;