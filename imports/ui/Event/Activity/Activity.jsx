import React from 'react';
import { Item, Grid, Label, Divider, Header } from 'semantic-ui-react';

import CategoryTag from '../../CategoryTag/index';
import styles from './Activity.css';

const Activity = ({
    category,
    name,
    start,
    duration,
    host,
    description
}) => (
    <Grid columns={2} divided>
        <Grid.Row>
            <Grid.Column computer={2}>
                <Header size="large" >
                    {start}
                </Header>
            </Grid.Column>
            <Grid.Column>
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Header>{name}</Item.Header>
                            <Item.Meta>{host}</Item.Meta>
                            <Item.Description>
                                {description}
                            </Item.Description>
                            <Item.Extra>
                                Duration: {duration}
                            </Item.Extra>
                            <Divider hidden />
                            <CategoryTag label={category} />
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default Activity;
