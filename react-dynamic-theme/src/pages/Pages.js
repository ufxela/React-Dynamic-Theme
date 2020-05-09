import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import { PagesContext } from '../contexts/PagesContext';

const Pages = () => {
    const pagesData = useContext(PagesContext);

    const pages = pagesData.map((pageData) => {
        return <Route key={pageData.path} path={pageData.path} exact component={pageData.component} />
    });

    return ( 
        <Switch>
            {pages}
        </Switch>
     );
}
 
export default Pages;
