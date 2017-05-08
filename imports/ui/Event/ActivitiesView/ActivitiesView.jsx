import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

import Activity from '../Activity/index';

const ActivitiesView = ({ activities }) => (
    <Segment>
        {
            !!activities ?
            activities.map(({ _id, ...details }) => (
                <Activity key={_id} {...details} />
            )) :
            <Header textAlign="center" disabled >Nothing to display</Header>
        }
    </Segment>
);

export default ActivitiesView;