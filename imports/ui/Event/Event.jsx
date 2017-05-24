import React, { Component } from 'react';
import { Header, Icon, Segment, Button } from 'semantic-ui-react';

import styles from './Event.css';
import Activities from './ActivitiesView';

class Event extends Component {
    constructor(props) {
        super(props);
    }

    renderActionButton() {
        const {
            buttonColor,
            buttonText,
            onClick
        } = this.props;

        return (
            <div className='ui two buttons'>
                <Button
                    basic
                    color={buttonColor}
                    onClick={onClick}
                >
                    {buttonText}
                </Button>
            </div>
        )
    }

    render() {
        const {
            name,
            date,
            eventsLocation,
            activities
        } = this.props;

        return (
            <div>
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
                    {this.renderActionButton()}
                </Segment>
           </div>
        );
    }
}

export default Event;