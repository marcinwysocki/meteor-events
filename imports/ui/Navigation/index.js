import * as React from 'react';
import { withRouter } from 'react-router-dom';

import { default as NavigationComponent } from './Navigation';


const Navigation = ({ location, history }) => {
    const onTabClick = (e, { name }) => {
        history.push('/' + name);
    };

    return <NavigationComponent
        onTabClick={onTabClick}
        activeTab={/\/(\w+)\/?/.exec(location.pathname)[1]}
    />
}

export default withRouter(Navigation)