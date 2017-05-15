import { Meteor } from 'meteor/meteor';

import { Events } from '../imports/collections/events';

Meteor.publish('events', () => Events.find());

Meteor.publish('myEvents', function () {
    return Events.find({ attendees: this.userId })
});