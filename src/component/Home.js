import React from 'react'
import { Icon } from 'semantic-ui-react';

const Home = () => {
    return(
        <div className="container">
            <br></br>
            <Icon name='paw' size='big' /><h4 className="left">About Us</h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>Cute pet is a non-profit, community-based organization and a registered charitable organization.This organization enforced the new animal protection laws and focused on bettering the lives of nelected pets by lobbying for legislation to provide for foster homes.</p>

            <Icon name='paw' size='big' />
            <h4 className="left">Adoption Process</h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>Step1: Click the Adoption button on the top right to browse all categories of pets</p>
            <p>Step2: Choose the type of pets that you are interested in</p>
            <p>Step3: Browse all our pets, click button or picture to reserve an appointment</p>
            <p>Step4: Please click Help for more information</p>
            <br></br>
            <br></br>
        </div>
    )
}

export default Home;