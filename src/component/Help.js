import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Icon } from 'semantic-ui-react';


const Help = () => {
    function submitClick(){
        alert('Thank you!');
    }
    return(
        <div className="container">
            <h4 className="left">Help</h4>
            <br></br>
            <br></br>
            <br></br>
            <div className="left">Contact Us for More Details!</div>
            <br></br>
            <br></br>
            <div className="left">
                <Icon name='facebook' size='big' />
                <a>Our FaceBook</a>
            </div>
            <br></br>
            <br></br>
            <div className="left">
                <Icon name='mail' size='big' />
                <a>Our Email</a>
            </div>
            <br></br>
            <br></br>
            <div className="left">
                <Icon name='phone square' size='big' />
                <a>Our Phone Number</a>
            </div>
            <br></br>
            <br></br>
            <Form>  
            <FormGroup>
                <Label for="exampleText"></Label>
                <Input type="textarea" name="text" id="exampleText" placeholder="Please enter your comments..."/>
            </FormGroup>
            <br></br>
            <Button onClick={submitClick}>Submit</Button>
            <br></br>
            <br></br>
            </Form>
            <br></br>
            <br></br>
        </div>
    )
}

export default Help;