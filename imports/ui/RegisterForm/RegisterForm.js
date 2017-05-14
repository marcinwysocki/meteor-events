import React, { Component } from 'react';
import { Button, Input, Form, Message } from 'semantic-ui-react'

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            passwordRepeat: "",
            error: false,
            errorMessage: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const { username, password, passwordRepeat } = this.state;

        if (password !== passwordRepeat) {
            this.setState({
                error: true,
                errorMessage: 'Passwords don\'t match',
            });

            return;
        }

        this.props.onSubmit(username, password)
            .catch(err => {
                this.setState({
                    error: true,
                    errorMessage: err.reason,
                });
            });
    }

    handleChange(event, { name }) {
        this.setState({
            [name]: event.target.value,
        });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} error={this.state.error}>
                <Message
                    error
                    header="Login error"
                    content={this.state.errorMessage}
                />
                <Form.Field
                    name="username"
                    onChange={this.handleChange}
                    label="Username"
                    control={Input}
                    placeholder="Username"
                    required
                />
                <Form.Field
                    name="password"
                    onChange={this.handleChange}
                    label="Password"
                    control={Input}
                    placeholder="Password"
                    type="password"
                    required
                />
                <Form.Field
                    name="passwordRepeat"
                    onChange={this.handleChange}
                    label="Repeat your password"
                    control={Input}
                    placeholder="Password"
                    type="password"
                    required
                />
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}