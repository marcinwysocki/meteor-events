import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navigation = ({ activeTab, onTabClick }) => (
    <Menu inverted>
        {
            !!Meteor.userId() && (
            <Menu.Menu>
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
            </Menu.Menu>
            )
        }
        <Menu.Menu position="right">
            {
                !!Meteor.userId() ? (
                    <Menu.Item
                        name="add"
                        onClick={() => Meteor.logout()}
                        as="div"
                        link
                    >
                        Logout
                    </Menu.Item>
                ) : (
                    <Menu.Item
                        name="add"
                        active={activeTab === 'login'}
                        color="blue"
                        onClick={onTabClick}
                        as="div"
                        link
                    >
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                )
            }
        </Menu.Menu>
    </Menu>
);

export default Navigation;