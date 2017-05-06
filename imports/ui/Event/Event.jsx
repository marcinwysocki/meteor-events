/* @flow */
import React, { Component } from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

import styles from './Event.css';
import Activity from '../Activity/Activity';

class Event extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, date, location, activities } = this.props;

        return (
            <Container textAlign="left" className={styles.wrapper}>
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
                        {location}
                    </span>
                </p>
                <Header>Activities</Header>
                <div>
                    {activities.map(activity => <Activity activity={activity} />)}
                </div>
           </Container>
        );
    }
}

export default () => <Event
    name="RST CodeMeetings"
    date="24/05/17 19:00"
    location="RST Meethub, Racławicka 2-4"
    activities={[
        { category: 'talk', name: 'Meteor', start: '19:00', duration: '45min' }
    ]}
/>