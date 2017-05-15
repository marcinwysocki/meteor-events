import { Meteor } from 'meteor/meteor';

import { Events } from '../collections/events';

Meteor.methods({
    addEvent: (event) => (
        Events.insert({
            ...event,
            attendeesCount: 0,
            attendees: [],
            userId: Meteor.userId()
        })
    ),
    joinEvent: (eventId) => {
        Events.update({ _id: eventId }, {
            $push: { attendees: Meteor.userId() },
            $inc: { attendeesCount: 1 }
        })
    },
    withdrawFromEvent: (eventId) => {
        Events.update({ _id: eventId }, {
            $pull: { attendees: Meteor.userId() },
            $inc: { attendeesCount: -1 }
        })
    },
    deleteEvent: (eventId) => {
        Events.remove({ _id: eventId })
    }
});