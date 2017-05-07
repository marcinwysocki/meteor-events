/* @flow */
import React, { Component } from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';

import styles from './Event.css';
import Activities from '../ActivitiesView';

class Event extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, date, eventsLocation, activities } = this.props;

        return (
            <Container textAlign="left" className={styles.wrapper}>
                <Segment>
                <Header size="huge" >
                    {name}
                </Header>
                <p className={styles.paragraph}>
                    <Icon name="calendar" />
                    <span className={styles.date}>
                        {date}
                    </span>
                </p>
                <p className={styles.paragraph}>
                    <Icon name="marker" />
                    <span className={styles.date}>
                        {eventsLocation}
                    </span>
                </p>
                </Segment>
                <Header>Activities</Header>
                <Activities activities={activities} />
           </Container>
        );
    }
}

export default Event;