import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navigation = ({ activeTab, onTabClick }) => (
    <Menu inverted>
        <Menu.Item
            name="events"
            active={activeTab === 'events'}
            color="blue"
            onClick={onTabClick}
            as="div"
            link
        >
            <Link to="/">Events</Link>
        </Menu.Item>
        <Menu.Item
            name="add"
            active={activeTab === 'add'}
            color="blue"
            onClick={onTabClick}
            as="div"
            link
        >
            <Link to="/add">Add</Link>
        </Menu.Item>
    </Menu>
);

export default Navigation;