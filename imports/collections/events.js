import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Events = new Mongo.Collection('events');

export const getAllEvents = () => Events.find();

export const getEventById = (eventId) => {
    check(eventId, String);

    const objId = new Mongo.ObjectID(eventId);

    return Events.findOne({ _id: objId });
};
