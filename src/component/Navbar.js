import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import { Icon } from 'semantic-ui-react';
import translate from '../i18n/translate';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className = "container">
            <Icon name='paw' size='big' />
                <a className="brand-logo">Cute Pet</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/adoption">Adoption</Link></li>
                    <li><Link to="/help">Help</Link></li>
                </ul>
            </div> 
        </nav>
    )
}

export default Navbar;