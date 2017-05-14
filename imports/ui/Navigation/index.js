import * as React from 'react';
import { withRouter } from 'react-router-dom';

import { default as NavigationComponent } from './Navigation';


const Navigation = ({ location, history }) => {
    const onTabClick = (e, { name }) => {
        history.push('/' + name);
    };

    const match = /\/(\w+)\/?/.exec(location.pathname);

    return <NavigationComponent
        onTabClick={onTabClick}
        activeTab={match ? match[1] : ""}
    />
};

export default withRouter(Navigation)