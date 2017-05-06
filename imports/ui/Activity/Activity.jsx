import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const Activity = ({ activity: { category, name, start, duration }}) => (
    <Container>
        <Header size="small" >
            {name}
        </Header>
        <p>Duration: {duration}</p>
    </Container>
);

export default Activity;