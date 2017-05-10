import AddEventForm from './AddEventForm.jsx';
import composeWithTracker from 'compose-with-tracker';

const loader = ({ history }, onData) => {
    const subscription = Meteor.subscribe('events');

    if (subscription.ready()) {
        onData(null, {
            onFormSubmit: event => {
                Meteor.call('addEvent', event, (err, insertedId) => {
                    if (!err) {
                        history.push(`/event/${insertedId}`)
                    }
                })
            }
        });
    }
};

export default composeWithTracker(loader)(AddEventForm);