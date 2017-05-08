import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const EventCard = ({
    name,
    date,
    eventsLocation,
    description,
    attendeesCount
}) => (
    <Card>
        <Card.Content>
            <Card.Header>
                {name}
            </Card.Header>
            <Card.Meta>
                {date} @ {eventsLocation}
            </Card.Meta>
            <Card.Description>
                {description}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Icon name="users"/>
            {attendeesCount} people
        </Card.Content>
    </Card>
);

export default EventCard;