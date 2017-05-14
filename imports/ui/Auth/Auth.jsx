import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Meteor}  from 'meteor/meteor';

class WithAuthentication extends Component {
    componentWillMount() {
        const { loginRoute, history } = this.props;
        if (!Meteor.userId()) {
            history.push(loginRoute)
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(WithAuthentication)