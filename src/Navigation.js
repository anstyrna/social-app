import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul className="Nav-sidebar">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/SignUp">
                    <li>Sign up</li>
                </Link>
                <Link to="/Login">
                    <li>Log in</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navigation;