import React from 'react';

const ThemeDisplayCardBasic = ({cardTheme}) => {
    const {syntax, ui, header} = cardTheme;
    
    return ( 
        <div>
            <div style={{backgroundColor: header, height:'10px', width:'50px' , borderRadius: '2px'}}>
                
            </div>
            <div style={{height:'5px'}} />
            <div style={{backgroundColor: syntax, height:'4px', width:'47px', borderRadius: '2px'}}/>
            <div style={{height:'3px'}} />
            <div style={{backgroundColor: syntax, height:'4px', width:'50px', borderRadius: '2px'}} />
            <div style={{height:'3px'}} />
            <div style={{backgroundColor: syntax, height:'4px', width:'45px', borderRadius: '2px'}} />
            <div style={{height:'5px'}} />
            <div style={{backgroundColor: ui, height:'4px', width:'20px', margin: 'auto', borderRadius: '2px'}} />
            <div style={{height:'3px'}} />
        </div>
     );
}
 
export default ThemeDisplayCardBasic;