import { Meteor } from 'meteor/meteor';
import composeWithTracker from 'compose-with-tracker';
import queryString from 'query-string';

import { withAuthentication } from '../Auth/Auth';
import Event from './Event.jsx';
import { getEventById } from '../../collections/events';


const actions = (eventId, redirect) => ({
    withdrawFromEvent: {
        onClick: () => Meteor.call('withdrawFromEvent', eventId),
        buttonColor: 'red',
        buttonText: 'Withdraw'
    },
    joinEvent: {
        onClick: () => Meteor.call('joinEvent', eventId),
        buttonColor: 'green',
        buttonText: 'Join'
    },
    deleteEvent: {
        onClick: () => {
            Meteor.call('deleteEvent', eventId);
            redirect();
        },
        buttonColor: 'red',
        buttonText: 'Delete'
    }
});

const loader = ({ match, history }, onData) => {
    const subscription = Meteor.subscribe('events');

    if (subscription.ready()) {
        const { id } = match.params;
        const event = getEventById(id);
        const isOwnedByCurrentUser = Meteor.userId() === event.userId;
        const hasCurrentUserJoined = event.attendees.some(id => Meteor.userId() === id);

        const availableAction = isOwnedByCurrentUser
                ? 'deleteEvent'
                : hasCurrentUserJoined ? 'withdrawFromEvent' : 'joinEvent';
        const action = actions(event._id, () => history.push('/events'))[availableAction];

        onData(null, {
            isOwnedByCurrentUser,
            hasCurrentUserJoined,
            ...action,
            ...event
        });
    }
};

export default composeWithTracker(loader)(withAuthentication(Event));