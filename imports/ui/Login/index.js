import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import LoginForm from './Login.jsx';

const onSubmit = (username, password) => new Promise((resolve, reject) => {
    Meteor.loginWithPassword(username, password, (err, data) => {
        if (err) {
            reject(err);
        }

        resolve(data);
    });
});

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        if (Meteor.userId()) {
            this.props.history.push('/');
        }
    }

    handleSubmit(username, password) {
        const { history } = this.props;

        return onSubmit(username, password)
            .then(() => {
                history.push('/');
            });
    }

    render() {
        return <LoginForm onSubmit={this.handleSubmit} />
    }
}

export default withRouter(LoginContainer);
