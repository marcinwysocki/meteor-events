import React, { Component } from 'react';
import { Segment, Icon, Modal, Button } from 'semantic-ui-react';

export default class AddActivity extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const triggerComponent = <Icon name="add" size="large" link />

        return (
            <Modal trigger={triggerComponent}>
                <Modal.Header>
                    Add an activity
                </Modal.Header>
                <Modal.Content>
                    akhsjdhaksjdhakjsdhkasdjhajksdhakjsdhkajshdk
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' inverted>
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

