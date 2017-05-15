import React, { Component } from 'react';
import { Header, Icon, Segment, Button } from 'semantic-ui-react';

import styles from './Event.css';
import Activities from './ActivitiesView';

class Event extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            name,
            date,
            eventsLocation,
            activities,
            hasCurrentUserJoined,
            isOwnedByCurrentUser,
            onClick
        } = this.props;

        return (
            <div>
                <Segment>
                <Header size="huge" >
                    {name}
                    <Icon name="calendar" />
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
                    <div className='ui two buttons'>
                        <Button
                            basic
                            color={hasCurrentUserJoined ? "red" : "green"}
                            onClick={onClick}
                        >
                            {hasCurrentUserJoined ? "Withdraw" : "Join"}
                        </Button>
                    </div>
                </Segment>
                <Activities activities={activities} />
           </div>
        );
    }
}

export default Event;