import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const EventCard = ({
    name,
    date,
    startTime,
    eventsLocation,
    description,
    attendeesCount,
    onClick
}) => (
    <Card fluid onClick={onClick}>
        <Card.Content>
            <Card.Header>
                {name}
            </Card.Header>
            <Card.Meta>
                {date}, {startTime} @ {eventsLocation}
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