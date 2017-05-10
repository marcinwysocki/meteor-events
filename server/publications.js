import { Meteor } from 'meteor/meteor';

import { Events } from '../imports/collections/events';

Meteor.publish('events', () => Events.find());
