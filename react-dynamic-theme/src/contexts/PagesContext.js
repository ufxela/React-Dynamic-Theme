import React, { createContext } from 'react';

import AnotherPage from '../pages/AnotherPage';
import ReactDynamicTheme from '../pages/ReactDynamicTheme';

export const PagesContext = createContext();

const pagesRegistry = [
    {
        name: 'React Dynamic Theme',
        component: ReactDynamicTheme,
        path: '/',
        placeFromLeft: 1,
        navBar: true
    },
    {
      name: 'Another Page',
      component: AnotherPage,
      path: '/anotherpage',
      placeFromLeft: 2,
      navBar: true
    },
];

const PagesContextProvider = ({children}) => {
  return ( 
    <PagesContext.Provider value={pagesRegistry}>
      {children}
    </PagesContext.Provider>
   );
}
 
export default PagesContextProvider;