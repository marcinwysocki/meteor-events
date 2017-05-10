import { Meteor } from 'meteor/meteor';

import { Events } from '../collections/events';

Meteor.methods({
    addEvent: (event) => (
        Events.insert({
            ...event,
            attendeesCount: 0
        })
    )
});