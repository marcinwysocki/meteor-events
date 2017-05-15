import React from 'react';
import { Meteor } from 'meteor/meteor';
import composeWithTracker from 'compose-with-tracker';

import { withAuthentication } from '../Auth/Auth.jsx';
import { getAllEvents } from '../../collections/events';
import Dashboard from '../Dashboard/Dashboard';

const loader = ({ history }, onData) => {
    const subscription = Meteor.subscribe('myEvents');
    const onCardClick = id => () => history.push(`/events/${id}`);

    if (subscription.ready()) {
        const events = getAllEvents();

        onData(null, { events, onCardClick })
    }
};

export default composeWithTracker(loader)(withAuthentication(Dashboard));