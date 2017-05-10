import React, { Component } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import DateTime from 'react-datetime';
import moment from 'moment';

import 'react-datetime/css/react-datetime.css';

export default class AddEventForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            startTime: moment().subtract(moment().minutes(), 'minutes'),
            endTime: moment().subtract(moment().minutes(), 'minutes'),
            date: moment(),
            description: null,
            name: null,
            eventsLocation: null,
        };

        this.handleDatetimeChange = this.handleDatetimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleDatetimeChange(field) {
        return moment => {
            this.setState({
                [field]: moment,
            });
        }
    }

    isValidDate(date) {
        return date.isSameOrAfter(moment());
    }


    handleChange(e, { name, value }) {
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onFormSubmit({
            ...this.state,
            startTime: this.state.startTime.toDate(),
            endTime: this.state.endTime.toDate(),
            date: this.state.date.toDate(),
        });
    }

    render() {
        const { date, endTime, startTime } = this.state;
        const halfHourStepConstraint = { minutes: { step: 30 } };

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Field
                    name="name"
                    onChange={this.handleChange}
                    label="Name"
                    control={Input}
                    placeholder="Name"
                    required
                />
                <Form.Field
                    name="eventsLocation"
                    onChange={this.handleChange}
                    label="Location"
                    control={Input}
                    placeholder="Location"
                    required
                />
                <Form.Group widths='equal' inline={false}>
                    <Form.Field
                        name="date"
                        label="Date"
                        control={DateTime}
                        defaultValue={date}
                        timeFormat={false}
                        onChange={this.handleDatetimeChange('date')}
                        isValidDate={this.isValidDate}
                        required
                    />
                    <Form.Field
                        name="startTime"
                        label="Start"
                        control={DateTime}
                        defaultValue={startTime}
                        dateFormat={false}
                        timeConstraints={halfHourStepConstraint}
                        onChange={this.handleDatetimeChange('startTime')}
                        required
                    />
                    <Form.Field
                        name="endTime"
                        label="End"
                        control={DateTime}
                        defaultValue={endTime}
                        dateFormat={false}
                        timeConstraints={halfHourStepConstraint}
                        onChange={this.handleDatetimeChange('endTime')}
                        required
                    />
                </Form.Group>
                <Form.Field
                    name="description"
                    onChange={this.handleChange}
                    id="form-textarea-control-opinion"
                    control={TextArea}
                    label='Description'
                    placeholder='Description'
                    required
                />
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Submit'
                />
            </Form>
        );
    }
}