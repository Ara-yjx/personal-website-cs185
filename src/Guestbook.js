import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase'
import config from './config'
import { Button } from 'react-bootstrap';
import Message from './Message'
import MessageForm from './MessageForm'

export default class Guestbook extends Component {

    constructor(props) {
        super(props)
        
        this.state = { messages: [] }
        console.log('initstate')

        console.log(firebase)
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
            console.log('firebase init')
            console.log(this)
        } 
    }
    
    componentDidMount() {
        console.log(this)
        let ref = firebase.database().ref('guestbook')
        ref.on('value', this.firebaseToState)
    }


    submit = function(message) {
        firebase.database().ref('guestbook').push().set(message)
    }
  

    firebaseToState = function(snapshot) {
        const state = snapshot.val()
        console.log(state)
        this.setState({ messages: state })
        console.log('setstate')
    }.bind(this)

    
    render = function(){

        var messageDivs = []
        if(this.state.messages) {
            console.log(this.state.messages)
            for(let msg of Object.values(this.state.messages)) {
                console.log(msg)
                messageDivs.push(<Message data = {msg}/>)
            }
        }

        return (
        <div className="container-fluid p-0">
            <div class="row">
                <div className="col-5">
                    <h4>Leave a message here ↓</h4>
                    <MessageForm onSubmit={this.submit}/>
                </div>

                <div className="col-1"></div>
                
                <div className="col-6">
                    { messageDivs }
                </div>
            </div>
        </div>
        )

    }
}