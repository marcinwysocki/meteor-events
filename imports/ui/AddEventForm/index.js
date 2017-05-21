import React from 'react';

import AddEventForm from './AddEventForm.jsx';
import composeWithTracker from 'compose-with-tracker';

import { withAuthentication } from '../Auth/Auth'

const AddEventFormContainer = ({ history }) => {
    const onFormSubmit = (event) => {
        Meteor.call('addEvent', event, (err, insertedId) => {
            if (!err) {
                history.push(`/events/${insertedId}`)
            }
        })
    };

    return <AddEventForm onFormSubmit={onFormSubmit} />
};

export default withAuthentication(AddEventFormContainer);