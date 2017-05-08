import { Meteor } from 'meteor/meteor';
import composeWithTracker from 'compose-with-tracker';
import queryString from 'query-string';

import Event from './Event.jsx';
import { getEventById } from '../../collections/events';

const loader = ({ match }, onData) => {
    const subscription = Meteor.subscribe('events');

    if (subscription.ready()) {
        const { id } = match.params;

        onData(null, getEventById(id));
    }
};

export default composeWithTracker(loader)(Event);