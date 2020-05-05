import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';


export default class MessageForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {validated: false}
        this.nameField = React.createRef();
        this.descriptionField = React.createRef();
        this.messageField = React.createRef();
        this.publicField = React.createRef();
    }

    handleSubmit = function(event) {
        
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget; // form == [ nameField, ...]

        // Collect and validate form values
        let nameF = this.nameField.current;
        if (nameF.value.length < 5 || nameF.value.length > 20) {
            nameF.setCustomValidity(':(');
        } else {
            nameF.setCustomValidity('')
        }

        let descriptionF = this.descriptionField.current;
        if (descriptionF.value.length > 100) {
            descriptionF.setCustomValidity(':(');
        } else {
            descriptionF.setCustomValidity('')
        }

        let messageF = this.messageField.current;
        if (messageF.value.length < 15 || messageF.value.length > 500) {
            messageF.setCustomValidity(':(')
        } else {
            messageF.setCustomValidity('')
        }

        let publicF = this.publicField.current;

        // Display bootstrap validation feedback
        this.setState({validated: true})

        // Pass to parent component
        if (form.checkValidity()) {
            this.props.onSubmit({
                name: nameF.value,
                description: descriptionF.value,
                message: messageF.value,
                public: publicF.checked,
            })
        }
        
    }.bind(this)


    render() {
        return (
        <div className='mb-5'>
        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control ref={this.nameField} type="text" 
                    placeholder="5 ~ 20 characters"/>
                <Form.Control.Feedback type="invalid">
                    Name must be 5 ~ 20 characters
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control  ref={this.descriptionField} 
                    type="text" as="textarea" rows="3" 
                    placeholder="< 100 characters"/>
                    <Form.Control.Feedback type="invalid">
                        Description must be less than 100 characters
                    </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control ref={this.messageField}
                    type="text" as="textarea" rows="3" 
                    placeholder="15 ~ 500 characters"/>
                    <Form.Control.Feedback type="invalid">
                        Message must be 15 ~ 500 characters
                    </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPublic">
                <Form.Check ref={this.publicField}
                    type="switch" defaultChecked="true" 
                    label="Make this message visible to public."/>
            </Form.Group>

            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
        </div>
        )
    }
}