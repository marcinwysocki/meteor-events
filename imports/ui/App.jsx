import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import styles from './App.css';
import Event from './Event';
import Dashboard from './Dashboard';
import AddEventForm from './AddEventForm';

export default () => (
    <BrowserRouter>
        <Container textAlign="left" className={styles.wrapper}>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/add" exact component={AddEventForm}/>
                <Route path="/event/:id" component={Event}/>
                <Route render={() => <h1>Page not found :(</h1>} />
            </Switch>
        </Container>
    </BrowserRouter>
);