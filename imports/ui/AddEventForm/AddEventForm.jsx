import React, { Component } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import DateTime from 'react-datetime';
import moment from 'moment';

import 'react-datetime/css/react-datetime.css';

export default class AddEventForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            startTime: moment(),
            endTime: moment(),
            date: moment(),
        };

        this.handleDatetimeChange = this.handleDatetimeChange.bind(this);
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

    render() {
        const { date, endTime, startTime } = this.state;

        return (
            <Form>
                <Form.Field
                    label="Name"
                    control={Input}
                    placeholder="Name"
                />
                <Form.Group widths='equal' inline={false}>
                    <Form.Field
                        label="Date"
                        control={DateTime}
                        defaultValue={date}
                        timeFormat={false}
                        onChange={this.handleDatetimeChange('date')}
                        isValidDate={this.isValidDate}

                    />
                    <Form.Field
                        label="Start"
                        control={DateTime}
                        defaultValue={startTime}
                        dateFormat={false}
                        onChange={this.handleDatetimeChange('startTime')}
                    />
                    <Form.Field
                        label="End"
                        control={DateTime}
                        defaultValue={endTime}
                        dateFormat={false}
                        onChange={this.handleDatetimeChange('endTime')}
                    />
                </Form.Group>
                <Form.Field
                    id="form-textarea-control-opinion"
                    control={TextArea}
                    label='Description'
                    placeholder='Description'
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