import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Meteor}  from 'meteor/meteor';

let config = {
    loginRoute: '/login',
};

export const withAuthentication = WrappedComponent => withRouter(
    class WithAuthentication extends Component {
        componentWillMount() {
            this.redirectIfNotLoggedIn();
        }

        redirectIfNotLoggedIn() {
            const { history } = this.props;

            if (!Meteor.userId()) {
                history.push(config.loginRoute)
            }
        }

        render() {
            const { loginRoute, ...props } = this.props;

            return <WrappedComponent {...props} />;
        }
    }
);
