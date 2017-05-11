import React from 'react';
import { Segment, Header, Grid } from 'semantic-ui-react';

import Activity from '../Activity/index';


import AddActivity from '../AddActivity/AddActivity'

const ActivitiesView = ({ activities }) => (
    <div>
        <div style={{display: "flex", alignItems: "center"}}>
            <h3 style={{margin: "3px"}}>Activities</h3>
            <AddActivity />
        </div>
        <Segment>
            {
                !!activities ?
                activities.map(({ _id, ...details }) => (
                    <Activity key={_id} {...details} />
                )) :
                <Header textAlign="center" disabled >Nothing to display</Header>
            }
        </Segment>
    </div>
);

export default ActivitiesView;