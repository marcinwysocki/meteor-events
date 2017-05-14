import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import styles from './App.css';
import Navigation from './Navigation';
import Event from './Event';
import Dashboard from './Dashboard';
import AddEventForm from './AddEventForm';
import Home from './Home';
import LoginForm from './Login'
import RegisterForm from './RegisterForm';

export default () => (
    <BrowserRouter>
        <div>
            <Navigation />
            <Container textAlign="left" className={styles.wrapper}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={LoginForm} />
                    <Route path="/register" exact component={RegisterForm} />
                    <Route path="/add" exact component={AddEventForm}/>
                    <Route path="/events" exact component={Dashboard}/>
                    <Route path="/events/:id" component={Event}/>
                    <Route render={() => <h1>Page not found :(</h1>} />
                </Switch>
            </Container>
        </div>
    </BrowserRouter>
);