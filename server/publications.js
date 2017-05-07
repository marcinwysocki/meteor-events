import { Meteor } from 'meteor/meteor';

import { getAllEvents } from '../imports/collections/events';

Meteor.publish('events', getAllEvents);
