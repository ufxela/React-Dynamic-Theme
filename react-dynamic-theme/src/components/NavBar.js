import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { PagesContext } from '../contexts/PagesContext';

const NavBar = () => {
    const pagesData = useContext(PagesContext).filter(function(pageData) {
        return pageData.navBar;
    }).sort(function(a, b){
        if(a.placeFromLeft < b.placeFromLeft){
            return -1
        }else{
            return 1
        }
    });
        
    const pageLinks = pagesData.map((pageData) => {
        if(pageData.navBar){
            return (
                <li className="NavBar-item" key={pageData.path}>
                    <Link className="NavBar-item-link" to={pageData.path} >{pageData.name}</Link>
                </li>
            );
        }else{
            return null;
        }
    });
    
    return ( 
        <ul className="NavBar">
            {pageLinks}
        </ul>
     );
}
 
export default NavBar;