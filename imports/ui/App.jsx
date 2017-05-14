import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import styles from './App.css';
import Navigation from './Navigation';
import Event from './Event';
import Dashboard from './Dashboard';
import AddEventForm from './AddEventForm';
import WithAuthentication from './Auth/Auth';
import LoginForm from './Login'

export default () => (
    <BrowserRouter>
        <div>
            <Navigation />
            <Container textAlign="left" className={styles.wrapper}>
                <Switch>
                    <Route path="/login" exact component={LoginForm} />
                    <WithAuthentication loginRoute="/login">
                        <Route path="/" exact render={() => <h1>Welcome!</h1>} />
                        <Route path="/add" exact component={AddEventForm}/>
                        <Route path="/events" exact component={Dashboard}/>
                        <Route path="/events/:id" component={Event}/>
                    </WithAuthentication>
                    <Route render={() => <h1>Page not found :(</h1>} />
                </Switch>
            </Container>
        </div>
    </BrowserRouter>
);