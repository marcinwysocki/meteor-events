import composeWithTracker from 'compose-with-tracker';

import Dashboard from './Dashboard.jsx';
import { withAuthentication } from '../Auth/Auth'

import { getAllEvents } from '../../collections/events';

const loader = ({ location, history }, onData) => {
    const onCardClick = id => () => history.push(`${location.pathname}/${id}`);
    const subscription = Meteor.subscribe('events');

    if (subscription.ready()) {
        const events = getAllEvents();

        onData(null, { events, onCardClick });
    }
};

export default composeWithTracker(loader)(withAuthentication(Dashboard));
