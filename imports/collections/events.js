import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import moment from 'moment';

const formatEventDates = event => !event ? {} : {
    ...event,
    date: moment(event.date).format("MMMM Do"),
    startTime: moment(event.startTime).format("h:mm a"),
    endTime: moment(event.endTime).format("h:mm a"),
};

export const Events = new Mongo.Collection('events');

export const getAllEvents = () => Events.find().fetch().map(formatEventDates);

export const getEventById = (eventId) => {
    check(eventId, String);

    return formatEventDates(Events.findOne({ _id: eventId }));
};