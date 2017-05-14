import React from 'react';
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

export default () => <LoginForm onSubmit={onSubmit} />

