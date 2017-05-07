import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import Event from './Event';

export default () => (
    <BrowserRouter>
        <Route exact path="*" component={Event}/>
    </BrowserRouter>
);