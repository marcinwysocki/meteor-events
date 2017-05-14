import * as React from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

import { default as NavigationComponent } from './Navigation';


const Navigation = ({ location, history }) => {
    const onLogout = () => {
        Meteor.logout(err => {
            if (err) {
                throw err;
            }

            history.push('/login');
        })
    };

    const onTabClick = (e, { name }) => {
        history.push('/' + name);
    };

    const match = /\/(\w+)\/?/.exec(location.pathname);

    return <NavigationComponent
        onTabClick={onTabClick}
        onLogout={onLogout}
        activeTab={match ? match[1] : ""}
    />
};

export default withRouter(Navigation)