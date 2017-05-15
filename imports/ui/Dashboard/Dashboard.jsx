import React from 'react';
import { Meteor } from 'meteor/meteor';
import { CardGroup } from 'semantic-ui-react';

import EventCard from './EventCard';

const Dashboard = ({ events, onCardClick }) => (
    <CardGroup>
        {events && events.map(event => (
            <EventCard
                key={event._id}
                onClick={onCardClick(event._id)}
                isOwnedByCurrentUser={Meteor.userId() === event.userId}
                {...event}
            />
        ))}
    </CardGroup>
);

export default Dashboard;