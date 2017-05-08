import React from 'react';
import { CardGroup } from 'semantic-ui-react';

import EventCard from './EventCard';

const Dashboard = ({ events }) => (
    <CardGroup>
        {events && events.map(event => (
            <EventCard key={event._id} {...event} />
        ))}
    </CardGroup>
);

export default Dashboard;