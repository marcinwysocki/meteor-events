import { Meteor } from 'meteor/meteor';
import composeWithTracker from 'compose-with-tracker';
import queryString from 'query-string';

import { withAuthentication } from '../Auth/Auth';
import Event from './Event.jsx';
import { getEventById } from '../../collections/events';

const withdrawFromEvent = eventId => () => Meteor.call('withdrawFromEvent', eventId);
const joinEvent = eventId => () => Meteor.call('joinEvent', eventId);

const loader = ({ match }, onData) => {
    const subscription = Meteor.subscribe('events');

    if (subscription.ready()) {
        const { id } = match.params;
        const event = getEventById(id);
        const isOwnedByCurrentUser = Meteor.userId() === event.userId;
        const hasCurrentUserJoined = event.attendees.some(id => Meteor.userId() === id);

        onData(null, {
            isOwnedByCurrentUser,
            hasCurrentUserJoined,
            onClick: hasCurrentUserJoined ? withdrawFromEvent(event._id) : joinEvent(event._id),
            ...event
        });
    }
};

export default composeWithTracker(loader)(withAuthentication(Event));