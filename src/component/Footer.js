import React from 'react'
import { Icon } from 'semantic-ui-react';

const Footer = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className = "fixed-bottom">
                <div className="container">
                <Icon name='home' size='big' />
                    <a className="brand-logo">Our Location</a>
                    <ul className="right">
                        <li>169 Lees Ave, Ottawa ON</li>
                        <li>K1S 5P3</li>    
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Footer;