import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import Event from './Event';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={() => <h1>Welcome</h1>}/>
            <Route path="/event/:id" component={Event}/>
            <Route render={() => <h1>Page not found :(</h1>} />
        </Switch>
    </BrowserRouter>
);