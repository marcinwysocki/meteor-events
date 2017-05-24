import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navigation = ({ activeTab, onTabClick, onLogout }) => (
    <Menu inverted>
        {
            !!Meteor.userId() && (
            <Menu.Menu>
                <Menu.Item
                    name=""
                    active={activeTab === ''}
                    color="blue"
                    onClick={onTabClick}
                    as="div"
                    link
                >
                    <Link to="/">Home</Link>
                </Menu.Item>
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
            {
                !!Meteor.userId() ? (
                    <Menu.Menu position="right">
                        <Menu.Item
                            name="add"
                            onClick={onLogout}
                            as="div"
                            link
                        >
                            Logout
                        </Menu.Item>
                    </Menu.Menu>
                ) : (
                    <Menu.Menu position="right">
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
                        <Menu.Item
                            name="register"
                            active={activeTab === 'register'}
                            color="blue"
                            onClick={onTabClick}
                            as="div"
                            link
                        >
                            <Link to="/register">Register</Link>
                        </Menu.Item>
                    </Menu.Menu>
                )
            }
    </Menu>
);

export default Navigation;