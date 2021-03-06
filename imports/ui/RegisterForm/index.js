import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

import RegisterForm from './RegisterForm';

const onSubmit = (username, password) => new Promise((resolve, reject) => {
    Accounts.createUser({ username, password }, (err, data) => {
       if (err) {
           reject(err);
       }

       resolve(data);
    });
});

class RegisterContainer extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(username, password) {
        const { history } = this.props;

        return onSubmit(username, password)
            .then(() => {
                history.push('/');
            });
    }

    render() {
        return <RegisterForm onSubmit={this.handleSubmit} />
    }
}

export default withRouter(RegisterContainer);

