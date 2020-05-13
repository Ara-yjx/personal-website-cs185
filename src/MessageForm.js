import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import checkIcon from './imgs/check.gif'
import { motion } from "framer-motion"
// import './transition.css'

export default class MessageForm extends Component {
    
    constructor(props){
        super(props)
        this.state = {validated: false, submitted: false}
        this.nameField = React.createRef();
        this.descriptionField = React.createRef();
        this.messageField = React.createRef();
        this.publicField = React.createRef();
    }

    onSubmitSuccess = function(error) { // callback
        console.log(error)
        if(!error) {
            this.setState({submitted: true})
        }
    }.bind(this)

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
            }, this.onSubmitSuccess)
        }
        
    }.bind(this)


    render() {
        return (
        <div className='mb-5'>
        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <motion.div animate={{opacity: [0,1]}} transition={{delay:0, duration:0.5}}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={this.nameField} type="text" 
                        placeholder="5 ~ 20 characters"/>
                    <Form.Control.Feedback type="invalid">
                        Name must be 5 ~ 20 characters
                    </Form.Control.Feedback>
                </Form.Group>
            </motion.div>

            <motion.div animate={{opacity: [0,1]}} transition={{delay:0.3, duration:0.5}}>
                <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control  ref={this.descriptionField} 
                        type="text" as="textarea" rows="3" 
                        placeholder="< 100 characters"/>
                        <Form.Control.Feedback type="invalid">
                            Description must be less than 100 characters
                        </Form.Control.Feedback>
                </Form.Group>
            </motion.div>

            <motion.div animate={{opacity: [0,1]}} transition={{delay:0.6, duration:0.5}}>
                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control ref={this.messageField}
                        type="text" as="textarea" rows="3" 
                        placeholder="15 ~ 500 characters"/>
                        <Form.Control.Feedback type="invalid">
                            Message must be 15 ~ 500 characters
                        </Form.Control.Feedback>
                </Form.Group>
            </motion.div>

            <motion.div animate={{opacity: [0,1]}} transition={{delay:0.9, duration:0.5}}>
                <Form.Group controlId="formPublic">
                    <Form.Check ref={this.publicField}
                        type="switch" defaultChecked="true" 
                        label="Visible to public"/>
                </Form.Group>
            </motion.div>

            <motion.div animate={{opacity: [0,1]}} transition={{delay:1.2, duration:0.5}}>
                <div className="d-flex justify-content-between">
                    <Button variant={this.state.submitted ? "success":"dark"} type="submit">
                        { this.state.submitted ? 'Submitted' : 'Submit' }
                    </Button>
                    { this.state.submitted ? <img src={checkIcon} alt="success"></img> : ''}
                </div>
            </motion.div>
        </Form>
        </div>
        )
    }
}